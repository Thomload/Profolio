// // backend/ask.ts
// import { createClient } from "@supabase/supabase-js";
// import fetch from "node-fetch";

// const supabaseClient = createClient(
//   "https://szzrubjjypyggteqbozz.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6enJ1YmpqeXB5Z2d0ZXFib3p6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU5OTQ0NzYsImV4cCI6MjA2MTU3MDQ3Nn0.8EgsHacqCGJoqQTcHyceLyaWQV3parxpx0VK7WP1I7E"
// );

// const MISTRAL_API_KEY = "9qHGDMs9noVHS8h0aXNnU5Nom9fgk2kl";

// async function getEmbedding(text: string): Promise<number[]> {
//   const response = await fetch("https://api.mistral.ai/v1/embeddings", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${MISTRAL_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "mistral-embed",
//       input: text,
//     }),
//   });

//   const result = (await response.json()) as {
//     data: { embedding: number[] }[];
//   };
//   return result.data[0].embedding;
// }

// export async function askQuestion(query: string): Promise<string> {
//   const embedding = await getEmbedding(query);

//   const { data, error } = await supabaseClient.rpc("match_documents", {
//     query_embedding: embedding,
//     match_threshold: 0.7,
//     match_count: 3,
//   });

//   if (error) {
//     console.error("❌ Supabase error:", error.message);
//     return "Failed to retrieve documents.";
//   }

//   const context = data.map((d: any) => d.content).join("\n");

//   const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${MISTRAL_API_KEY}`,
//     },
//     body: JSON.stringify({
//       model: "mistral-small",
//       messages: [
//         {
//           role: "system",
//           content: "You are a helpful assistant that answers questions based on provided context.",
//         },
//         {
//           role: "user",
//           content: `Context:\n${context}\n\nQuestion: ${query}`,
//         },
//       ],
//     }),
//   });

//   const json = (await res.json()) as {
//     choices: { message: { content: string } }[];
//   };

//   return json.choices?.[0]?.message?.content || "No answer found.";
// }
