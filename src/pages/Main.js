import React from "react";
import "../style/main.scss";
import MainVisual from "./MainVisual";

const Main = () => {
  return (
    <main className="Main">
      <MainVisual />
      <section className="mainComtent">
        <div className="inner">maincomtent</div>
      </section>
    </main>
  );
};

export default Main;
