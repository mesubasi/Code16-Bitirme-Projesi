import React, { useEffect, useState } from "react";

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
          metrekup: baraj.toplamHacim * 1000, // Örnek metreküp hesaplama
        }));
        setBarajVerileri(formattedData);
        localStorage.setItem("barajVerileri", JSON.stringify(formattedData));
      } catch (error) {
        console.error("Verileri alırken bir hata oluştu:", error);
      }
    };

    fetchData();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-gray-900">Baraj Verileri</h2>
      <div className="mt-5">
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Baraj ID
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Baraj Adı
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kret Kotu
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Max Su Kotu
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Min Su Kotu
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Toplam Hacim
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Olu Hacim
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Kalan Hacim
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
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
                    {baraj.kalanHacim} m³
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {baraj.barajKapasitesi} m³
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">
              Terimlerin Açıklamaları:
            </h3>
            <ul className="list-disc pl-5 text-sm text-white space-y-2">
              <li>
                <p className="inline">Baraj ID:</p>
                <strong className="font-semibold text-white">
                  Her baraj için benzersiz bir tanımlayıcı.
                </strong>
              </li>
              <li>
                <strong>Baraj ID:</strong> Her baraj için benzersiz bir
                tanımlayıcı.
              </li>
              <li>
                <strong>Baraj Adı:</strong> Barajın resmi adı.
              </li>
              <li>
                <strong>Kret Kotu:</strong> Barajın taşkın kontrol seviyesi;
                barajın güvenle tutabileceği maksimum yükseklik.
              </li>
              <li>
                <strong>Max Su Kotu:</strong> Baraj gölünün ulaşabileceği
                maksimum su seviyesi.
              </li>
              <li>
                <strong>Min Su Kotu:</strong> Barajın işlevsel kalabilmesi için
                gereken minimum su seviyesi.
              </li>
              <li>
                <strong>Toplam Hacim:</strong> Barajın toplam su hacmi
                kapasitesi.
              </li>
              <li>
                <strong>Ölü Hacim:</strong> Baraj gölünün minimum operasyonel
                seviyesi ile maksimum seviyesi arasında kalan su hacmi.
              </li>
              <li>
                <strong>Kalan Hacim:</strong> Mevcut su seviyesi itibariyle,
                barajın daha fazla su tutma kapasitesi.
              </li>
              <li>
                <strong>Baraj Kapasitesi:</strong> Barajın maksimum su tutma
                kapasitesi.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralSituation;
