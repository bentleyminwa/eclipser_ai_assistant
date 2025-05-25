import { GoogleGenAI } from "@google/genai";
import { API_KEY } from "../config/global";

const ai = new GoogleGenAI({
  apiKey: API_KEY,
});

export async function gemini(prompt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });

  return response.text;
}
