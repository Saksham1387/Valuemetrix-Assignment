import { openai } from "@ai-sdk/openai";
import z from "zod";
import { getPrompt } from "@/lib/helper";
import { generateObject } from "ai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const prompt = getPrompt(body);
  
  const result = await generateObject({
    model: openai("gpt-4o-2024-08-06", {
      structuredOutputs: true,
    }),
    schemaName: "portfolioInsights",
    schemaDescription: "Insights into an investment portfolio.",
    schema: z.object({
      portfolioSummary: z.object({
        name: z.string(),
        totalValue: z.number(),
        cash: z.number(),
        description: z.string(),
        createdAt: z.string(),
        updatedAt: z.string(),
      }),
      diversificationAnalysis: z.object({
        cashPercentage: z.number(),
        holdingsPercentage: z.number(),
        isWellDiversified: z.boolean(),
        commentary: z.string(),
      }),
      sectorWiseExposure: z.array(
        z.object({
          sector: z.string(),
          exposurePercentage: z.number(),
        })
      ),
      aiGeneratedInvestmentThesis: z.string(),
      strengths: z.array(z.string()),
      weaknesses: z.array(z.string()),
      marketTrendsImpact: z.object({
        technologyUpside: z.string(),
        consumerSentiment: z.string(),
        interestRateSensitivity: z.string(),
      }),
    }),
    prompt,
  });

  return new Response(JSON.stringify(result.object));
}
