// /api/tweet.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export default async function handler(req, res) {
  try {
    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(
      "Create a tweet on a trending topic on X (formerly Twitter). Make it concise and engaging."
    );
    const response = await result.response;
    const text = await response.text();

    res.status(200).send(text);
  } catch (err) {
    console.error("Gemini error:", err);
    res.status(500).send("Failed to generate tweet.");
  }
}
