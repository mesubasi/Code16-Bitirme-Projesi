import React, { useState } from "react";
import { IoIosSave } from "react-icons/io";

const SaveMail = () => {
  const [email, setEmail] = useState("");

  const handleSaveEmail = () => {
    // Öncelikle localStorage'dan mevcut e-posta listesini al
    const emails = JSON.parse(localStorage.getItem("emails")) || [];
    // Yeni e-posta adresini listeye ekle
    if (email && !emails.includes(email)) {
      // E-posta zaten listeye eklenmemişse ekleyin
      emails.push(email);
      // Güncellenmiş listeyi localStorage'a kaydet
      localStorage.setItem("emails", JSON.stringify(emails));
      alert("E-posta adresi kaydedildi!");
      setEmail(""); // Input alanını temizle
    } else {
      alert("Bu e-posta adresi zaten kaydedilmiş veya boş.");
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex justify-center my-4">
      <div className="flex border-2 border-gray-200 rounded-lg overflow-hidden">
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="E-posta adresinizi girin"
          className="px-4 py-2 w-full outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />
        <button
          onClick={handleSaveEmail}
          className="bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-300 px-4 flex items-center justify-center"
        >
          <IoIosSave className="text-white text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SaveMail;
