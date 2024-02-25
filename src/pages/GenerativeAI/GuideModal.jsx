import React from "react";

const GuideModal = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-8 rounded-lg max-w-md">
        <h2 className="text-xl font-bold mb-4">Kullanıcı Rehberi</h2>
        <p>
          Bu arayüz sayesinde birçok verinin kullanım şeklini bulabilirsiniz.
          Aşağıdaki adımları takip edin:
        </p>
        <ol className="list-decimal pl-4">
          <li>"Veriyi Çek" butonuna basarak güncel verileri çekin.</li>
          <li>
            "Veriyi Kaydet" butonuna basarak veriyi lokal depolama alanınıza
            kaydedin.
          </li>
          <li>
            "Sorgula" butonuna basarak birçok veriye ait bilgileri görüntüleyin.
          </li>
          <li>
            Nöbetçi eczane sorgulaması için ilçenize ait örnek kullanım: "İNEGÖL
            nöbetçi eczane"
          </li>
        </ol>
        <button
          onClick={onClose}
          className="bg-gray-300 hover:bg-gray-400 py-2 px-4 rounded-md mt-4"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default GuideModal;
