import express from "express";
import sendMail from "./api/sendMail.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/sendMail", sendMail); // sendMail.js'deki fonksiyonu çağırın

app.listen(port, () => {
  console.log(`Server Çalışıyor ${port}`);
});
