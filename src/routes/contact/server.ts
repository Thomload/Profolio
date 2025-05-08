import express, { Request, Response } from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req: Request, res: Response) => {
  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "profolio675@gmail.com",
        pass: "ygdb gpih sbjm ctlz"
      },
    });

 
    const info = await transporter.sendMail({
      from: `"Thai Restaurant" <profolio675@gmail.com>`,
      to: "profolio675@gmail.com",
      subject: "Neue Nachricht vom Kontaktformular",
      text: message,
      replyTo: email,
    });

    console.log("✅ E-Mail gesendet:", info.messageId);
    res.status(200).send("E-Mail gesendet.");
  } catch (err: any) {
    console.error("❌ Fehler beim Senden:", err);
    res.status(500).send("Fehler beim Senden.");
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server läuft auf http://localhost:${PORT}`);
});