import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Halaman Utama (Home)
import NrtcPage from "./pages/home/NrtcPage";

// Halaman Berita (News)
import NewsPage from "./pages/news/NewsPage";
import News6 from "./pages/news/News6";
import News7 from "./pages/news/News7";
import News8 from "./pages/news/News8";

// Halaman Pendaftaran (Registration)
import HomeIndo from "./pages/registration/homeindo";
import IndonesiaOffline from "./pages/registration/indo-offline";
import IndonesiaOnline from "./pages/registration/indo-online";
import Thankyou from "./pages/registration/thankyou";

// Halaman Daftar Pemenang (List of Winners)
import ListLow from "./pages/low/listlow";
import List2024 from "./pages/low/2024/list2024";
import List2025 from "./pages/low/2025/list2025";
import List2026 from "./pages/low/2026/list2026";

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Utama */}
        <Route path="/" element={<NrtcPage />} />

        {/* Halaman Berita */}
        <Route path="/News2" element={<NewsPage />} />
        <Route path="/News6" element={<News6 />} />
        <Route path="/News7" element={<News7 />} />
        <Route path="/News8" element={<News8 />} />

        {/* Halaman Registrasi */}
        <Route path="/homeindo" element={<HomeIndo />} />
        <Route path="/indo-online" element={<IndonesiaOnline />} />
        <Route path="/indo-offline" element={<IndonesiaOffline />} />
        <Route path="/thankyou" element={<Thankyou />} />

        {/* Halaman Daftar Pemenang */}
        <Route path="/listlow" element={<ListLow />} />
        <Route path="/list2024" element={<List2024 />} />
        <Route path="/list2025" element={<List2025 />} />
        <Route path="/list2026" element={<List2026 />} />
      </Routes>
    </Router>
  );
}

export default App;
