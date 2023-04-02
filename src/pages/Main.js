import React from "react";
import "../style/main.scss";
import MainVisual from "./MainVisual";
import MainContent from "./MainContent";

const Main = () => {
  return (
    <main className="Main">
      <MainVisual />
      <MainContent />
    </main>
  );
};

export default Main;
