import React from "react";
import { Doughnut } from "react-chartjs-2";
import Chart from "chart.js/auto";

const DoughnutChart = ({ measurement }) => {
  if (!measurement) return null;

  const dolulukOrani = measurement.olcumVerisi * 100; // Ölçüm verisini yüzde olarak hesapla

  const data = {
    labels: ["Dolu", "Boş"],
    datasets: [
      {
        data: [dolulukOrani, 100 - dolulukOrani],
        backgroundColor: ["#4bbe6c", "#FFFFFF"], // Dolu ve boş alan renkleri
        borderColor: ["#364F6B", "#FFFFFF"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    rotation: -90, // Yarım daireyi başlatmak için dönüş açısı
    circumference: 180, // Yarım daireyi oluşturacak çevre uzunluğu
    cutout: "50%", // İç boşluğun boyutu
    plugins: {
      legend: {
        display: false, // Efsaneyi (legend) gizle
      },
      title: {
        display: true,
        text: `%${dolulukOrani.toFixed(0)} Dolu`, // Başlıkta yüzde değerini göster
        position: "bottom", // Başlığı altta göster
      },
    },
    // Grafik kenar çizgilerini kaldır
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;
