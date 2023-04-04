import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SLIDE = [
  { id: 1, con: "" },
  { id: 2, con: "" },
  { id: 3, con: "" },
];

const MainThema = () => {
  const [IDX, setIDX] = useState();
  const Slide = useRef(null);

  const setting = {
    centerMode: true,
    arrows: false,
    infinite: true,
    centerPadding: "175px",
    autoplay: 1,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: true,
    afterChange: (idx) => setIDX(idx),
  };
  return (
    <section className="MainThema">
      <div className="inner">
        <h2>다양하게 즐기는 캠핑장</h2>
        <p>나에게 맞는 캠핑장을 찾아 떠나보세요</p>
        <Slider {...setting} ref={Slide}>
          {SLIDE.map((it, idx) => {
            return (
              <figure
                key={it.id}
                className={`Slide item0` + it.id + (idx === IDX ? " on" : "")}
              ></figure>
            );
          })}
        </Slider>
      <div className="Arrows">
        <button onClick={() => Slide.current.slickPrev()}>
          <FiArrowLeft />
        </button>
        <button onClick={() => Slide.current.slickNext()}>
          <FiArrowRight />
        </button>
      </div>
      </div>
    </section>
  );
};

export default MainThema;
