import React, { useState, useEffect } from "react";
import videoSrc from "../assets/2.mp4";
import logoBBB from "../assets/bbb.png";
import logoBKI from "../assets/bki.png";

const tips = [
  "Dünya'nın yüzeyinin yaklaşık %71'i su ile kaplıdır, ancak bu suyun %97'si tuzludur ve sadece %3'ü tatlı sudur.",
  "İnsan vücudu ortalama olarak %60 su içerir. Bu oran, yaşa, cinsiyete ve vücut yapısına göre değişiklik gösterebilir.",
  "Su, sıfır derece Celsius'ta donar ve yüz derece Celsius'ta kaynar, ancak bu değerler basınç değişikliklerine bağlı olarak değişebilir.",
  "Su, kendine özgü bir özelliği nedeniyle genişlerken donar, bu da buzun suyun altında yüzebilmesini sağlar.",
  "Su, mükemmel bir çözücüdür. Dünya üzerindeki birçok madde su içinde çözünebilir.",
  "Dünya'daki su miktarı sabittir ve su döngüsü yoluyla sürekli olarak yenilenir: buharlaşma, yoğunlaşma ve yağış.",
  "İnsanlar günlük olarak yaklaşık 2-4 litre su tüketmelidir, ancak bu miktar iklim, aktivite seviyesi ve bireysel sağlık durumuna göre değişebilir.",
  "Suyun kaldırma kuvveti, insanların ve diğer nesnelerin su içinde daha hafif hissetmelerini sağlar.",
  "Su, dünyadaki tüm yaşam formları için temel bir unsurdur. Hiçbir canlı organizma, su olmadan hayatta kalamaz.",
  "Bir insan birkaç hafta yiyeceksiz yaşayabilir, ancak su olmadan sadece birkaç gün dayanabilir.",
];

const articles = [
  {
    title: "Su ve Yaşam",
    article:
      "Su, yaşamın temel unsurlarından biridir. Tüm canlı organizmaların yaşamını sürdürebilmesi için su gereklidir. Hücrelerin yapı taşı olan su, metabolizma ve sindirim gibi temel biyolojik süreçlerin işleyişinde kritik rol oynar.",
  },
  {
    title: "Su ve Sağlık",
    article:
      "Sağlıklı bir yaşam için yeterli miktarda su tüketmek önemlidir. Vücut sıvı dengesini sağlamak, sindirim sistemini desteklemek, toksinlerin atılmasını sağlamak ve cilt sağlığını korumak için su gereklidir. Günlük su tüketimi, genel sağlık ve zindelik için hayati öneme sahiptir.",
  },
  {
    title: "Su ve Çevre",
    article:
      "Su, ekosistemlerin işleyişinde ve biyolojik çeşitliliğin korunmasında kilit bir rol oynar. Tatlı su kaynakları, sulak alanlar ve denizler, birçok canlı türünün yaşam alanıdır. Su kirliliği, habitat tahribatı ve su kaynaklarının aşırı kullanımı gibi faktörler, çevresel dengeyi tehdit edebilir.",
  },
  {
    title: "Su ve Sürdürülebilirlik",
    article:
      "Su kaynaklarının sürdürülebilir bir şekilde yönetilmesi, gelecek nesiller için yaşamsal bir gerekliliktir. Su tüketim alışkanlıklarını gözden geçirmek, suyu verimli kullanmak ve su kaynaklarını korumak, sürdürülebilir bir gelecek için önemli adımlardır. Su yönetimi, ekonomik, sosyal ve çevresel açıdan dengeli bir yaklaşım gerektirir.",
  },
];

const Home = () => {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTipIndex((prevIndex) => (prevIndex + 1) % tips.length);
    }, 7000); // Her 7 saniyede bir değişecek

    return () => clearInterval(timer); // Component temizlendiğinde timer'ı temizle
  }, []);

  return (
    <div className="min-h-screen   relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 w-full h-full object-cover opacity-50"
        src={videoSrc}
      ></video>
      <div className="absolute top-0 left-0 z-10 w-full h-full flex justify-center items-center pointer-events-none">
        {[...Array(20)].map((_, index) => (
          <div
            key={index}
            className="absolute w-3 h-3 text-blue-300"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `raindrop 2s linear ${Math.random()}s infinite`,
            }}
          >
            <svg
              viewBox="0 0 64 64"
              fill="currentColor"
              className="w-6 h-6 text-blue-300"
            >
              <circle cx="32" cy="32" r="20" />
            </svg>
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto text-center pb-12 px-4 mt-20">
        <p className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-8 p-5 bg-black bg-opacity-70 rounded-lg shadow-lg backdrop-blur">
          Tabiatın bize sunduğu en önemli kaynaklardan biri olan su, yaşamın
          temelini oluşturur. İçme suyu, tarım sulaması, endüstriyel üretim ve
          enerji üretimi gibi alanlarda hayati bir rol oynar. Ancak, su
          kaynaklarının sürdürülebilirliği giderek tehdit altındadır. İklim
          değişikliği, su kirliliği ve aşırı kullanım gibi faktörler, su
          kaynaklarının azalmasına ve kalitesinin düşmesine neden olmaktadır. Bu
          nedenle, suyun korunması ve etkin bir şekilde yönetilmesi hayati önem
          taşır. Gelecek nesillere daha sağlıklı bir çevre bırakmak için su
          kaynaklarını korumak ve sürdürülebilir şekilde kullanmak gereklidir.
        </p>
        <div className="flex justify-center items-center flex-wrap gap-8 my-10">
          <img
            src={logoBBB}
            alt="BBB Logo"
            className="h-24 md:h-32 lg:h-40 opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
          <div className="hidden md:block w-px h-40 bg-white bg-opacity-50"></div>
          <img
            src={logoBKI}
            alt="BKI Logo"
            className="h-24 md:h-32 lg:h-40 opacity-90 transition-opacity duration-300 hover:opacity-100"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* İpuçları ve bilgilendirme kutuları için dinamik içerik */}
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-black bg-opacity-80 rounded-lg p-6 shadow-lg backdrop-blur-md text-white transform transition duration-500 hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
              <p>{article.article}</p>
            </div>
          ))}
        </div>
        <div className="bg-black bg-opacity-80 rounded-lg p-6 shadow-lg backdrop-blur-md text-white my-5 transform transition duration-500 hover:scale-105">
          <h3 className="font-semibold text-lg mb-2">Bunu Biliyor Muydunuz?</h3>
          <p>{tips[currentTipIndex]}</p>
        </div>
        {/* Proje Hakkında Bölümü */}
        <div className="bg-black bg-opacity-80 rounded-lg p-6 shadow-lg backdrop-blur-md text-white mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Proje Hakkında</h2>
          <p>
            Bu proje "AI" bölümünde Bursadaki su kaynaklarının %85'ini oluşturan
            Doğancı ve Nilüfer Barajının API'den gelen verilerin güncel
            ölçümlerini alarak OpenAI teknolojisini kullanarak mail listesindeki
            kullanıcılara günlük verileri göndererek su tasarrufu konusunda
            bilgilendirici mesajları iletmektedir. Böylelikle birçok insana
            farkındalık oluşturmayı hedefleyen bu proje geliştirilmiştir.
            "Üretken AI" adı verilen kısımda ise birçok API'den alınan verinin
            kullanıcının sorduğu soruya karşılık cevaplar vermektedir.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
