import React, { useEffect, useState } from "react";
import openai from "openai";

const OpenAI = ({
  measurement,
  measurement2,
  setMeasurement,
  setOpenAIResponse,
}) => {
  const [openaiApiKey, setOpenaiApiKey] = useState(""); // OpenAI API anahtarını saklamak için bir state

  const apiKeys = process.env.REACT_APP_OPENAI_API_KEY; // API anahtarını çevre değişkeninden al

  const fetchOpenAIResponse = async () => {
    if (measurement && measurement2) {
      const prompt = `Nilüfer Barajının doluluk oranı ${
        measurement.olcumTarihi
      } tarihinde %${Math.round(
        measurement.olcumVerisi * 100
      )} olarak ölçülmüştür. Doğancı Barajının, ${
        measurement2.olcumTarihi
      } tarihindeki doluluk oranı %${Math.round(
        measurement2.olcumVerisi * 100
      )} olarak kaydedilmiştir. Bu durum hakkında su tasarrufu hatırlatıcı mesaj yazın. Sonuna Bursa Büyükşehir Belediyesi diye ekleyebilirsin.`;
      try {
        const openaiClient = new openai.OpenAI({
          apiKey: apiKeys, // Burada API anahtarını kullandığınızdan emin olun
          dangerouslyAllowBrowser: true,
        });
        const response = await openaiClient.completions.create({
          model: "gpt-3.5-turbo-instruct",
          prompt: prompt,
          max_tokens: 400,
          temperature: 0.5,
        });
        setOpenAIResponse(response.choices[0].text.trim());
        localStorage.setItem(
          "openai_response",
          response.choices[0].text.trim()
        );
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // .env dosyasından API anahtarını al ve state'e kaydet
    setOpenaiApiKey(process.env.REACT_APP_OPENAI_API_KEY);
  }, []);

  return (
    <button
      onClick={fetchOpenAIResponse}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-2 sm:px-4 rounded focus:outline-none focus:shadow-outline w-full sm:w-auto sm:py-0 mt-4 sm:mt-0 text-sm sm:text-base"
    >
      Üretken AI
    </button>
  );
};

export default OpenAI;
