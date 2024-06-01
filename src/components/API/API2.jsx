
const fetchMeasurement2 = async () => {

  const cors_anywhere = process.env.CORS_ANYWHERE;

  try {
    const response = await fetch(
      `${cors_anywhere}/https://acikveri.buski.gov.tr:9016/acik/yesil/v1/baraj/dolulukOrani/gunluk?barajID=2`
    );
    if (!response.ok) throw new Error("Network response was not ok.");
    const data = await response.json();

    // API'den gelen veriyi doğrudan işle
    if (data.sonuc && data.sonuc.length > 0) {
      const sortedMeasurements = data.sonuc.sort(
        (a, b) => new Date(b.olcumTarihi) - new Date(a.olcumTarihi)
      );
      const measurement = sortedMeasurements[0];

      // Ölçüm verisini localStorage'a kaydet
      localStorage.setItem("measurement2", JSON.stringify(measurement));

      return measurement;
    } else {
      throw new Error("Ölçüm verisi mevcut değil.");
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

export { fetchMeasurement2 };
