import React from "react";
import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div className="w-full max-w-4xl md:px-12 lg:px-24 bg-gray-900 rounded-md shadow-xl pb-5">
        <div className="flex flex-col items-center text-gray-300">
          <h1 className="text-5xl font-bold mb-4">Oops!</h1>
          <p className="text-lg text-center">
            Görünüşe göre burada olmaman gerekiyor. 🚪🏃‍♂️
          </p>
          <img
            src="https://i.giphy.com/5svuKKFAZlyuceOSop.webp"
            alt="funny-illustration"
            className="mb-8 w-80 opacity-80"
          />
          <p className="mb-8 text-center">
            Ama endişelenme, herkes yanlış kapıdan girer bazen. En iyisi,
            aşağıdaki düğmeye tıklayıp doğru yola geri dönmek. 👇
          </p>
          <button
            onClick={handleRedirect}
            className="px-6 py-3 bg-blue-700 text-white rounded hover:bg-blue-800 transition duration-300"
          >
            Ana Sayfaya Dön
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
