import { GoogleGenerativeAI } from '@google/generative-ai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY || '';

if (!apiKey) {
  console.warn("No Gemini API key set. Please add VITE_GEMINI_API_KEY to your .env");
}

const googleAI = new GoogleGenerativeAI(apiKey);

const generativeModel = googleAI.getGenerativeModel({ model: 'gemini-1.5-flash-latest' });

export async function getGeminiExplanation(
  num: number,
  result: number,
  customPrompt?: string
): Promise<string> {
  const prompt =
    customPrompt ??
    `Explain to a beginner how to calculate the factorial for ${num}. Confirm the result is ${result}. Use clear, step-by-step language.`;

  try {
    const generation = await generativeModel.generateContent(prompt);
    const responseText = await generation.response.text();

    return responseText || "No explanation from Gemini.";
  } catch (error: any) {
    console.error("Gemini Client API error:", error);
    if (error.statusCode === 429) return "Gemini rate limit reached. Please wait and try again.";
    return "Gemini explanation failed!";
  }
}

