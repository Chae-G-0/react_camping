import React from "react";
import "../../style/board.scss";

const Write = () => {
  return (
    <section className="Write">
      <div className="inner">
        <input type="text" className="title" />
        <input type="text" className="content" />
      </div>
    </section>
  );
};

export default Write;
