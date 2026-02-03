import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/homePage/homePage";
import VideoPage from "./pages/videosPage/videoPage";

function App() {
  const [language, setLanguage] = useState("ENGLISH");
  return (
    <Router>
      <Header language={language} onLanguageChange={setLanguage}/>
      <Routes>
        <Route path="/" element={<HomePage language={language} />} />
        <Route path="/videos" element={<VideoPage/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
