import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are the AI concierge for Rifqy Hazim HR's portfolio website.
- Answer questions concisely and helpfully in the language specified by the client.
- Suggest relevant sections (About, Works, Projects, Playbooks/Industry, Updates, Contact) based on the user's intent.
- If the user explicitly wants to navigate somewhere, append a directive at the end of your reply using the format [[NAVIGATE:/path]].
- Keep the directive separate from the natural language reply. Only include one directive per reply when appropriate.
- Prefer short paragraphs and bullet lists when useful.`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

type AgentRequest = {
  messages: ChatMessage[];
  language?: "id" | "en";
};

export async function POST(request: NextRequest) {
  if (!client.apiKey) {
    return NextResponse.json({ error: "OpenAI API key not configured." }, { status: 500 });
  }

  let payload: AgentRequest;
  try {
    payload = (await request.json()) as AgentRequest;
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const { messages = [], language = "id" } = payload;

  try {
    const response = await client.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: `${SYSTEM_PROMPT}\nCurrent interface language: ${language === "en" ? "English" : "Indonesian"}. Respond using this language.`,
        },
        ...messages,
      ],
    });

    const fullText = response.choices[0]?.message?.content?.trim() ?? "";
    const navigateMatch = fullText.match(/\[\[NAVIGATE:([^\]]+)\]\]/i);
    const navigation = navigateMatch ? navigateMatch[1].trim() : null;
    const cleanedText = fullText.replace(/\[\[NAVIGATE:[^\]]+\]\]/gi, "").trim();

    return NextResponse.json({ message: cleanedText, navigation });
  } catch (error) {
    console.error("Agent error", error);
    return NextResponse.json({ error: "Failed to contact AI agent." }, { status: 500 });
  }
}
