"use server";
import { AuthOptions, getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth/auth";

export type CreatePortfolioInput = {
  name: string;
  description?: string;
  holdings: {
    ticker: string;
    quantity: number;
  }[];
  cash: number;
};

export async function getPortfolios() {
  const session = await getServerSession(authOptions as AuthOptions);
  if (!session?.user?.email) {
    throw new Error("Not authenticated");
  }
  return prisma.portfolio.findMany({ 
    where: { 
      userId: session.user.id 
    } ,include: {
      holdings: true
    }
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
