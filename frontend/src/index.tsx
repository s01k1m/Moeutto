import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// pages
import Work from "./pages/Work";
import MainPage from "./pages/MainPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Work />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/mycloset" element={<App />} />
        <Route path="/notmycloset" element={<App />} />
        <Route path="/calendar" element={<App />} />
        <Route path="/mypage" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
