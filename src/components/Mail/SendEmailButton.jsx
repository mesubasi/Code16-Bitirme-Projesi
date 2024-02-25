import React from "react";
import bccAddresses from "./bcc_mail.js"; // bcc_mail.js'den dizi olarak e-posta adreslerini içe aktarır
import { BsSendFill } from "react-icons/bs";

function SendEmailButton() {
  const sendEmail = () => {
    const openAIResponse = localStorage.getItem("openai_response"); // localStorage'dan yanıtı al
    const savedEmails = JSON.parse(localStorage.getItem("emails")); // localStorage'dan kaydedilen e-posta adreslerinin listesini al

    // savedEmails var ve dizi ise, bcc adreslerine ekleyin
    const bccEmails = savedEmails
      ? [...bccAddresses, ...savedEmails]
      : bccAddresses;

    fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        openai_response: openAIResponse,
        bcc_addresses: bccEmails, // bccAddresses ve savedEmails dizilerini kullan
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        }
        throw new Error("Ağ Yanıt Vermedi");
      })
      .then((result) => alert("Email Başarıyla Gönderildi!"))
      .catch((error) => console.error("Hata:", error));
  };

  return (
    <>
      <div>
        <button
          onClick={sendEmail}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-lg"
        >
          <BsSendFill className="inline-block text-xl" />
        </button>
      </div>
    </>
  );
}

export default SendEmailButton;
