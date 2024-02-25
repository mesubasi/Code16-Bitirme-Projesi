import React, { useState, useEffect } from "react";

const CSoon = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-lg font-semibold">Yakında!</h2>
            <p className="mt-4">
              OpenAI entegrasyonu ile yakında birden fazla API'den gelen veriler
              kontrol edilip, girdi durumuna göre cevaplar döndürülecek. Bizi
              takipte kalın!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
              onClick={() => setIsVisible(false)}
            >
              Kapat
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CSoon;
