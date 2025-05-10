"use server";
import { AuthOptions, getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/auth";
import { PortfolioVisibility } from "@/generated/prisma/client";

export type CreatePortfolioInput = {
  name: string;
  description?: string;
  holdings: {
    ticker: string;
    quantity: number;
  }[];
  cash: number;
};

export type UpdatePortfolioVisibilityInput = {
  id: string;
  visibility: PortfolioVisibility;
};

export type GenerateShareTokenInput = {
  portfolioId: string;
  expiresAt?: Date;
};

export type RevokeShareTokenInput = {
  token: string;
};


export async function updatePortfolioVisibility(data: UpdatePortfolioVisibilityInput) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const portfolio = await prisma.portfolio.findUnique({
    where: { id: data.id },
  });
  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  if (portfolio.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  return prisma.portfolio.update({
    where: { id: data.id },
    data: { visibility: data.visibility },
  });
}

export async function getPortfolio(id: string) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }
  return prisma.portfolio.findUnique({
    where: { id },
    include: { holdings: true },
  });
}

export async function getPortfolios() {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }
  return prisma.portfolio.findMany({
    where: {
      userId: session.user.id,
    },
    include: {
      holdings: true,
    },
  });
}

export async function createPortfolio(data: CreatePortfolioInput) {
  try {
    const session = await getServerSession(authOptions as AuthOptions);

    if (!session?.user?.email) {
      throw new Error("Not authenticated");
    }

    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });

    if (!user) {
      throw new Error("User not found");
    }

    const portfolio = await prisma.portfolio.create({
      data: {
        name: data.name,
        description: data.description,
        userId: user.id,
        cash: data.cash,
        holdings: {
          create: data.holdings.map((holding) => ({
            ticker: holding.ticker,
            quantity: holding.quantity,
          })),
        },
      },
      include: {
        holdings: true,
      },
    });

    revalidatePath("/dashboard");
    return { success: true, portfolio };
  } catch (error) {
    console.error("Error creating portfolio:", error);
    return { success: false, error: "Failed to create portfolio" };
  }
}


export async function generateShareToken(data: GenerateShareTokenInput) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const portfolio = await prisma.portfolio.findUnique({
    where: { id: data.portfolioId },
  });
  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  if (portfolio.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  const token = Array.from({ length: 24 }, () => 
    Math.floor(Math.random() * 16).toString(16)
  ).join('');

  const sharedAccess = await prisma.sharedPortfolioAccess.create({
    data: {
      token,
      portfolioId: data.portfolioId,
      expiresAt: data.expiresAt,
    },
  });

  return { success: true, token: sharedAccess.token };
}

export async function getPortfolioByShareToken(token: string) {
  const sharedAccess = await prisma.sharedPortfolioAccess.findFirst({
    where: { token },
    include: {
      portfolio: {
        include: {
          holdings: true,
        },
      },
    },
  });

  if (!sharedAccess) {
    throw new Error("Share link not found");
  }

  if (!sharedAccess.isActive) {
    throw new Error("Share link has been revoked");
  }

  if (sharedAccess.expiresAt && sharedAccess.expiresAt < new Date()) {
    throw new Error("Share link has expired");
  }

  await prisma.tokenAccessLog.create({
    data: {
      accessId: sharedAccess.id,
    },
  });

  await prisma.sharedPortfolioAccess.update({
    where: { id: sharedAccess.id },
    data: { viewCount: { increment: 1 } },
  });

  return { success: true, portfolio: sharedAccess.portfolio };
}

export async function revokeShareToken(data: RevokeShareTokenInput) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const sharedAccess = await prisma.sharedPortfolioAccess.findUnique({
    where: { token: data.token },
    include: { portfolio: true },
  });

  if (!sharedAccess) {
    throw new Error("Share link not found");
  }

  if (sharedAccess.portfolio.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  await prisma.sharedPortfolioAccess.update({
    where: { id: sharedAccess.id },
    data: { isActive: false },
  });

  return { success: true };
}

export async function getPortfolioShares(portfolioId: string) {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  if (!user) {
    throw new Error("User not found");
  }

  const portfolio = await prisma.portfolio.findUnique({
    where: { id: portfolioId },
  });
  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  if (portfolio.userId !== user.id) {
    throw new Error("Unauthorized");
  }

  const shares = await prisma.sharedPortfolioAccess.findMany({
    where: {
      portfolioId,
      isActive: true,
    },
    select: {
      id: true,
      token: true,
      viewCount: true,
      createdAt: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return { success: true, shares };
}
