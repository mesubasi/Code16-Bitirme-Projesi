import React, { useState } from "react";
import GuideModal from "./GuideModal";
import CSoon from "./CSoon";

const Generative = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState("");
  const [responseText, setResponseText] = useState([]);
  const [modalOpenState, setModalOpenState] = useState(false);

  const closeModal = () => {
    setModalOpenState(false);
  };

  const cors_anywhere = process.env.CORS_ANYWHERE;

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://${cors_anywhere}/https://www.beo.org.tr/nobet-belediye`
      );
      if (!response.ok) {
        throw new Error("Veri çekme işlemi başarısız");
      }
      const data = await response.json();
      setData(data);
      alert("Veriler başarıyla çekildi");
    } catch (error) {
      console.error("Veri çekme hatası:", error);
      alert("Veri çekme işlemi sırasında bir hata oluştu");
    }
  };

  const saveToLocalStorage = () => {
    try {
      localStorage.setItem("data", JSON.stringify(data));
      alert("Veri başarıyla kaydedildi");
    } catch (error) {
      console.error("Veri kaydetme hatası:", error);
      alert("Veri kaydetme işlemi sırasında bir hata oluştu");
    }
  };

  const handleRequest = () => {
    try {
      const storedData = JSON.parse(localStorage.getItem("data"));

      if (storedData) {
        const input = inputValue.trim().toLowerCase(); // Girişin başındaki ve sonundaki boşlukları temizle, küçük harfe çevir

        if (input !== "") {
          if (input.includes(" nöbetçi eczane")) {
            // Girişte "nöbetçi eczane" ifadesi varsa ilçe adını al
            const ilceInput = input.replace(" nöbetçi eczane", ""); // "nöbetçi eczane" ifadesini kaldır

            const filteredEczaneler = Object.values(storedData).filter(
              (item) => item.ilce.toLowerCase().includes(ilceInput) // İlçe isimlerini küçük harfe çevirerek kontrol et
            );

            if (filteredEczaneler.length > 0) {
              const responseText = filteredEczaneler.map((eczane, index) => (
                <div
                  key={index}
                  className="mt-4 p-4 bg-gray-700 text-white rounded-md"
                >
                  <p>İlçe: {eczane.ilce}</p>
                  <p>Adres: {eczane.adres}</p>
                  <p>Eczane: {eczane.eczane}</p>
                  <p>Başlangıç: {eczane.baslangic}</p>
                  <p>Bitiş: {eczane.bitis}</p>
                </div>
              ));

              setResponseText(responseText);
              setInputValue("");
            } else {
              alert("Girilen ilçeye ait nöbetçi eczane bulunamadı.");
            }
          } else {
            alert("Kullanıcı Rehberini Okuyarak Devam Ediniz!");
          }
        } else {
          alert("Lütfen bir sorgu girin.");
        }
      } else {
        alert("Localde veri bulunamadı.");
      }
    } catch (error) {
      console.error("Veri işleme hatası:", error);
      alert("Veri işleme sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="flex flex-col items-center mt-20 min-h-screen bg-gray-900 p-4">
      <CSoon />
      <div className="space-y-4 bg-gray-800 p-8 rounded-lg shadow-lg max-w-lg w-full">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="form-input px-4 py-2 w-full rounded-md border-2 border-gray-700 bg-gray-700 text-white focus:outline-none focus:border-blue-500 transition-colors"
          placeholder="Kullanıcı Rehberini İnceleyin..."
        />
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={fetchData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors"
          >
            Veriyi Çek
          </button>
          <button
            onClick={saveToLocalStorage}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded-md transition-colors"
          >
            Veriyi Kaydet
          </button>
        </div>
        <button
          onClick={handleRequest}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-md w-full transition-colors"
        >
          Sorgula
        </button>
        <button
          onClick={() => setModalOpenState(true)}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md w-full transition-colors"
        >
          Kullanıcı Rehberi
        </button>
        <GuideModal isOpen={modalOpenState} onClose={closeModal} />
        <div className="space-y-2">{responseText}</div>
      </div>
    </div>
  );
};

export default Generative;
