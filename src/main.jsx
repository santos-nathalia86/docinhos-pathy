import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";
// Tema de Natal: as regras só valem com NATAL_ATIVO (classes "natal-*" e ".hero--natal")
import "./natal/natal.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
