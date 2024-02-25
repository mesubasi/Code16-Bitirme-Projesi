import React, { useEffect, useState } from "react";
import SendEmailButton from "./Mail/SendEmailButton";
import { GrUpdate } from "react-icons/gr";
import OpenAI from "./OpenAI/OpenAI";
import DoughnutChart from "./Chart/DoughnutChart";
import { fetchMeasurement } from "./API/API";
import { fetchMeasurement2 } from "./API/API2";
import SaveMail from "./Mail/SaveMail";
import { Navigate } from "react-router-dom";

const Data = () => {
  const [measurement, setMeasurement] = useState(null);
  const [measurement2, setMeasurement2] = useState(null);
  const [openAIResponse, setOpenAIResponse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  // Oturum durumunu kontrol et
  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(loggedInStatus === "true");
  }, []);

  const handleUpdateMeasurements = async () => {
    setIsLoading(true);
    try {
      await handleUpdateMeasurement(fetchMeasurement, setMeasurement);
      await handleUpdateMeasurement(fetchMeasurement2, setMeasurement2);
    } catch (error) {
      console.error("Error updating measurements:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateMeasurement = async (fetchFunc, setState) => {
    try {
      const latestMeasurement = await fetchFunc();
      setState(latestMeasurement);
    } catch (error) {
      console.error("Error updating measurement:", error);
    }
  };

  useEffect(() => {
    const savedMeasurement = localStorage.getItem("measurement");
    const savedMeasurement2 = localStorage.getItem("measurement2");
    if (savedMeasurement && savedMeasurement2) {
      setMeasurement(JSON.parse(savedMeasurement));
      setMeasurement2(JSON.parse(savedMeasurement2));
    } else {
      handleUpdateMeasurements(); // Güncelleme fonksiyonunu doğrudan çağır
    }

    const savedOpenAIResponse = localStorage.getItem("openai_response");
    if (savedOpenAIResponse) {
      setOpenAIResponse(savedOpenAIResponse);
    } else {
      setOpenAIResponse("Varsayılan AI Cevabı");
    }
  }, []);

  return (
    <>
      {isLoggedIn ? (
        <div className="flex flex-col min-h-screen mt-9">
          <main className="flex-grow container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between space-x-0 md:space-x-10">
              <section className="w-full md:w-1/2 text-center">
                <h1 className="text-2xl font-semibold dark:text-white">
                  Nilüfer Barajı
                </h1>
                <div className="w-52 mx-auto">
                  <DoughnutChart measurement={measurement} />
                </div>
              </section>

              <section className="w-full md:w-1/2 text-center">
                <h1 className="text-2xl font-semibold dark:text-white">
                  Doğancı Barajı
                </h1>
                <div className="w-52 mx-auto">
                  <DoughnutChart measurement={measurement2} />
                </div>
              </section>
            </div>

            {isLoading ? (
              <p className="dark:text-slate-400">Ölçüm verisi yükleniyor...</p>
            ) : (
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg  mt-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6 rounded-tl-lg">
                        Baraj
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Ölçüm Tarihi
                      </th>
                      <th scope="col" className="py-3 px-6 rounded-tr-lg">
                        Ölçüm Verisi (%)
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b dark:border-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">Nilüfer Barajı</td>
                      <td className="py-4 px-6">{measurement?.olcumTarihi}</td>
                      <td className="py-4 px-6">
                        %{Math.round(measurement?.olcumVerisi * 100)}
                      </td>
                    </tr>
                    <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
                      <td className="py-4 px-6">Doğancı Barajı</td>
                      <td className="py-4 px-6">{measurement2?.olcumTarihi}</td>
                      <td className="py-4 px-6">
                        %{Math.round(measurement2?.olcumVerisi * 100)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* Üretken AI Cevabı Ortak Bölüm */}
            <div className="mt-6 p-4  bg-gray-100  dark:bg-gray-700  rounded-lg  mb-10">
              <h2 className="text-md font-semibold dark:text-white">
                Üretken AI Cevabı
              </h2>
              <p className="dark:text-gray-400 text-lg">{openAIResponse}</p>
            </div>
          </main>
          <SaveMail />
          <div className="flex flex-row gap-4 justify-center mb-5">
            <button
              onClick={handleUpdateMeasurements}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline text-base sm:text-lg"
            >
              <GrUpdate className="inline-block text-base sm:text-lg" />
            </button>

            <OpenAI
              measurement={measurement}
              measurement2={measurement2}
              setMeasurement={setMeasurement}
              setMeasurement2={setMeasurement2}
              setOpenAIResponse={setOpenAIResponse}
            />
            <SendEmailButton className="w-full sm:w-auto sm:px-4 sm:py-2 text-lg mt-4 sm:mt-0" />
          </div>
        </div>
      ) : (
        <Navigate to="/unauthorized" />
      )}
    </>
  );
};

export default Data;
