import { Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Button } from "antd";
import Landing from "./Pages/Landing";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import Download from "./Pages/Download";
import ReadyToDownload from "./Pages/ReadyToDownload";

function App() {
  return (
    <div className="relative  bg-cover bg-center bg-no-repeat bg-" style={{ backgroundImage: '' }}>
    <Header />
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/download-page" element={<Download />} />
      <Route path="/ready-todownload-path" element={<ReadyToDownload/>}/>
      {/* Add more routes here */}
    </Routes>
    <Footer />
  </div>
  );
}

export default App;
