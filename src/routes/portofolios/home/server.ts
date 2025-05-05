// // backend/server.ts
// import express, { Request, Response } from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
// import { askQuestion } from "./QA";

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/ask", async (req: Request, res: Response) => {
//   const query: string = req.body.query;
//   try {
//     const answer = await askQuestion(query);
//     res.json({ answer });
//   } catch (err: unknown) {
//     console.error("❌ Server error:", err);
//     res.status(500).json({ error: "Internal error" });
//   }
// });

// app.listen(3000, () => {
//   console.log("🚀 Backend listening at http://localhost:3000");
// });
