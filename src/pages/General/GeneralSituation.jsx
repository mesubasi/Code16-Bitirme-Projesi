import React, { useEffect, useState } from "react";
import Analysis from "./Analysis"; 

const GeneralSituation = () => {
  const [barajVerileri, setBarajVerileri] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere-p2im.onrender.com/https://acikveri.buski.gov.tr:9016/acik/yesil/v1/baraj"
        );
        const data = await response.json();
        const formattedData = data.sonuc.map((baraj) => ({
          barajID: baraj.barajID,
          barajAdi: baraj.barajAdi,
          kretKotu: baraj.kretKotu,
          maxSuKotu: baraj.maxSuKotu,
          minSuKotu: baraj.minSuKotu,
          toplamHacim: baraj.toplamHacim,
          oluHacim: baraj.oluHacim,
          kalanHacim: baraj.kalanHacim,
          barajKapasitesi: baraj.barajKapasitesi,
        }));
        setBarajVerileri(formattedData);
        localStorage.setItem("barajVerileri", JSON.stringify(formattedData));
      } catch (error) {
        console.error("Verileri alırken bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="min-h-screen max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-semibold text-white">Baraj Verileri</h2>
    <div className="mt-5">
      <div className="shadow overflow-hidden sm:rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Baraj ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Baraj Adı
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kret Kotu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Max Su Kotu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Min Su Kotu
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Toplam Hacim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ölü Hacim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Kalan Hacim
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Baraj Kapasitesi
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {barajVerileri.map((baraj) => (
                <tr key={baraj.barajID}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {baraj.barajID}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.barajAdi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.kretKotu} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.maxSuKotu} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.minSuKotu} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.toplamHacim} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.oluHacim} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.kalanHacim.toFixed(0)} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.barajKapasitesi} m³
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-8 bg-white shadow rounded-lg p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Terimlerin Açıklamaları:
        </h3>
        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2">
          {[
            { term: "Baraj ID", description: "Her baraj için benzersiz bir tanımlayıcı." },
            { term: "Baraj Adı", description: "Barajın resmi adı." },
            { term: "Kret Kotu", description: "Barajın taşkın kontrol seviyesi; barajın güvenle tutabileceği maksimum yükseklik." },
            { term: "Max Su Kotu", description: "Baraj gölünün ulaşabileceği maksimum su seviyesi." },
            { term: "Min Su Kotu", description: "Barajın işlevsel kalabilmesi için gereken minimum su seviyesi." },
            { term: "Toplam Hacim", description: "Barajın toplam su hacmi kapasitesi." },
            { term: "Ölü Hacim", description: "Baraj gölünün minimum operasyonel seviyesi ile maksimum seviyesi arasında kalan su hacmi." },
            { term: "Kalan Hacim", description: "Mevcut su seviyesi itibariyle, barajın daha fazla su tutma kapasitesi." },
            { term: "Baraj Kapasitesi", description: "Barajın maksimum su tutma kapasitesi." }
          ].map((item) => (
            <li key={item.term}>
              <strong>{item.term}:</strong> {item.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <Analysis />
  </div>
  
  );
};

export default GeneralSituation;
