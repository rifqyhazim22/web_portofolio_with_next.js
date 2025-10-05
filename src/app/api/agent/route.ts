import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const SYSTEM_PROMPT = `You are the AI concierge for Rifqy Hazim HR's portfolio website.
- "HR" in the brand stands for Haidar Ramadhan (part of his full name), not Human Resources.
- Rifqy Hazim HR is an AI engineer focused on prompt engineering, agent orchestration, and web delivery; reflect that positioning when users ask who he is.
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
  location?: string;
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

  const { messages = [], language = "id", location } = payload;

  const locationDescriptions: Record<string, string> = {
    "/": "the home page (hero introduction, quotes, and latest highlights)",
    "/about": "the About page (story, timeline, capabilities, and testimonials)",
    "/playbooks": "the Playbooks hub (AI education and future-industry frameworks)",
    "/updates": "the Updates page (short-form insights and announcements)",
    "/works": "the Works gallery (selected prompt engineering deliverables)",
    "/projects": "the Projects gallery (web/app builds)",
    "/contact": "the Contact page (links, email, and FAQ)",
  };

  const locationContext = location
    ? locationDescriptions[location] ?? `the page at ${location}`
    : undefined;

  const systemSections = [
    SYSTEM_PROMPT,
    `Current interface language: ${language === "en" ? "English" : "Indonesian"}. Respond using this language.`,
    locationContext
      ? `Visitor is currently browsing ${locationContext}. Take that into account when crafting your answer and navigation hints.`
      : null,
  ].filter(Boolean) as string[];

  try {
    const response = await client.chat.completions.create({
      model: "gpt-5-nano",
      messages: [
        {
          role: "system",
          content: systemSections.join("\n"),
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
