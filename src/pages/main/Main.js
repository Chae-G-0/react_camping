import React from "react";
import "../../style/main.scss";
import MainVisual from "../main/MainVisual";
import MainContent from "../main/MainContent";
import MainThema from "./MainThema";

const Main = () => {
  return (
    <main className="Main">
      <MainVisual />
      <MainContent />
      <MainThema />
    </main>
  );
};

export default Main;
