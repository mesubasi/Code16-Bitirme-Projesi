import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirectNow, setRedirectNow] = useState(false);
  const [countdown, setCountdown] = useState(3); // Geri sayım başlangıç değeri
  const navigate = useNavigate();

  useEffect(() => {
    let countdownInterval;
    if (redirectNow) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000); // Her saniye güncelle
    }

    return () => {
      clearInterval(countdownInterval);
    };
  }, [redirectNow]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (
      (username === "123" && password === "123") ||
      (username === storedUsername && password === storedPassword)
    ) {
      localStorage.setItem("isLoggedIn", "true");
      setTimeout(() => {
        navigate("/");
        window.location.reload(); // Sayfayı yenile
      }, 3000); // 3 saniye sonra yönlendir

      // Geri sayım başlat
      setRedirectNow(true);
    } else {
      alert("Yanlış kullanıcı adı veya parola!");
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      textShadow: "0px 0px 8px rgb(255,255,255)",
      boxShadow: "0px 0px 8px rgb(255,255,255)",
      transition: {
        duration: 0.3,
        yoyo: Infinity,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen flex items-center justify-center bg-gray-800"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, x: -100 },
        visible: {
          opacity: 1,
          x: 0,
          transition: { type: "spring", delay: 0.5 },
        },
      }}
    >
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-100">
            Giriş Yap
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Kullanıcı Adı
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Kullanıcı Adı"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Parola
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-600 placeholder-gray-400 text-white bg-gray-700 rounded-b-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Parola"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <motion.div whileHover="hover" variants={buttonVariants}>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Giriş Yap
            </button>
          </motion.div>
          <motion.div whileHover="hover" variants={buttonVariants}>
            <button
              type="button"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={() => navigate("/register")}
            >
              Kayıt Ol
            </button>
          </motion.div>
        </form>
        {redirectNow && (
          <div className="text-center text-white">
            Yönlendiriliyor... Geri sayım: {countdown}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Login;
