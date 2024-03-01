// sendMail.js

import nodemailer from "nodemailer";
import dotenv from "dotenv";
import bccAddresses from "../src/components/Mail/bcc_mail.js";

dotenv.config();

export default async function sendMail(req, res) {
  const { openai_response, bcc_addresses } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: bcc_addresses || bccAddresses,
      subject: "Su Tüketimine Dikkat Edelim Geleceğimize Sahip Çıkalım",
      text: openai_response,
    });

    console.log("Email sent: %s", info.response);
    res.send("Email Gönderme Başarılı");
  } catch (error) {
    console.error("Email Gönderme Hatası: ", error);
    res.status(500).send("Email Gönderme Hatası");
  }
}
