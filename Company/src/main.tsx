import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header.tsx";
import "./index.css";
import Button from "./Components/Button.tsx";
import CarouselApp from "./Components/CarouselApp.tsx";

import NavBar from "./Components/NavBar.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Header />
    <NavBar />
    <CarouselApp />
  </React.StrictMode>
);
