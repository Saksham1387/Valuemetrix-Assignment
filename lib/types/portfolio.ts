export type Portfolio = {
    id: string;
    name: string;
    description?: string | null;
    holdings: {
      id: string;
      ticker: string;
      quantity: number;
      createdAt: Date;
      updatedAt: Date;
      portfolioId: string;
    }[];
    cash: number;
    createdAt: Date;
    updatedAt: Date;
    userId: string;
    visibility: "PRIVATE" | "PUBLIC" | "SMART_SHARED";
  };