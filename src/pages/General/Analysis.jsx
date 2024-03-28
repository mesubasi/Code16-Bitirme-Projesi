import React, { useEffect, useState } from "react";

const Analysis = () => {
  const [kalanGunSayisi, setKalanGunSayisi] = useState(0);
  const [kisiBasiSuKullanimi, setKisiBasiSuKullanimi] = useState(0);
  const [aylikToplamSuTuketimi, setAylikToplamSuTuketimi] = useState(0);

  useEffect(() => {
    const storedBarajVerileri = JSON.parse(localStorage.getItem("barajVerileri"));

    if (storedBarajVerileri && storedBarajVerileri.length > 0) {
      const toplamKalanHacim = storedBarajVerileri.reduce(
        (acc, baraj) => acc + baraj.kalanHacim, 0
      );

      const now = new Date();
      const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
      const firstDayOfNextMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const daysInMonth = (firstDayOfNextMonth - firstDayOfMonth) / (24 * 60 * 60 * 1000);

      const bursaNüfus = 3214571;
      const bursaGunlukSuTuketimi = 425000; 
      const kisiBasiKullanim = (bursaGunlukSuTuketimi / bursaNüfus) * 1000;

      const kalanGun = toplamKalanHacim / bursaGunlukSuTuketimi;
      const aylıkTuketim = bursaGunlukSuTuketimi * daysInMonth;

      setKalanGunSayisi(kalanGun);
      setKisiBasiSuKullanimi(kisiBasiKullanim);
      setAylikToplamSuTuketimi(aylıkTuketim);
    }
  }, []);

  return (
    <div className="mt-8 p-8 max-w-5xl mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-white mb-4">
        Su Durumu Analizi
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <p className="text-lg text-white bg-black/30 p-5 rounded-lg shadow hover:bg-black/40 transition-colors">
          Kalan Suyumuz (Gün):{" "}
          <span className="font-semibold">{kalanGunSayisi.toFixed(0)}</span>
        </p>
        <p className="text-lg text-white bg-black/30 p-5 rounded-lg shadow hover:bg-black/40 transition-colors">
          Kişi Başı Günlük Su Tüketimi (Litre):{" "}
          <span className="font-semibold">
            {kisiBasiSuKullanimi.toFixed(0)}
          </span>
        </p>
        <p className="text-lg text-white bg-black/30 p-5 rounded-lg shadow hover:bg-black/40 transition-colors">
          Nüfusun Aylık Ortalama Su Tüketimi (m³):{" "}
          <span className="font-semibold">
            {aylikToplamSuTuketimi.toLocaleString()}
          </span>
        </p>
        <p className="text-lg text-white bg-black/30 p-5 rounded-lg shadow hover:bg-black/40 transition-colors">
          Günlük Ortalama Su Tüketimi (m³):{" "}
          <span className="font-semibold">425.000</span>
        </p>
      </div>
    </div>
  );
};

export default Analysis;
