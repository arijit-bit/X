import ModelClient, { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

const endpoint = "https://models.github.ai/inference";
const model = "openai/gpt-4.1";
const apiKey = process.env.AZURE_API_KEY;

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const client = ModelClient(endpoint, new AzureKeyCredential(apiKey));

  const response = await client.path("/chat/completions").post({
    body: {
      messages: [
        {
          role: "system",
          content:
            "You are a social media expert. Generate an engaging tweet about a trending topic on X.",
        },
        {
          role: "user",
          content: "Create a tweet on trending topic on X",
        },
      ],
      temperature: 1.0,
      top_p: 1.0,
      model,
    },
  });

  if (isUnexpected(response)) {
    return res.status(500).json({ error: response.body.error });
  }

  const tweet = response.body.choices[0].message.content;
  res.status(200).send(tweet);
}
