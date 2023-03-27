import React from "react";
import "../style/main.scss";
import MainVisual from "./MainVisual";

const Main = () => {
  return (
    <main className="Main">
      <MainVisual />
      <section className="mainComtent">
        <div className="inner">mainContent</div>
      </section>
    </main>
  );
};

export default Main;
