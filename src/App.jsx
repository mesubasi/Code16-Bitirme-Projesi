import React from "react";
import { Routes, Route } from "react-router-dom";
import Data from "./components/Data";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Unauthorized from "./pages/Unauthorized";
import Generative from "./pages/GenerativeAI/Generative";
import GeneralSituation from "./pages/General/GeneralSituation";

function App() {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/genel-durum" element={<GeneralSituation />} />
        <Route path="/ai" element={<Data />} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/uretken-ai" element={<Generative />} />
      </Routes>
    </div>
  );
}

export default App;
