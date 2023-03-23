import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../style/main.scss";

const SLIDER = [
  { id: 1, content: "camping" },
  { id: 2, content: "지역별 캠핑장 알아보기" },
  { id: 3, content: "캠핑 정보를 한 곳에서" },
];

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  const mainSlide = useRef(null);
  useEffect(() => {
    setIDX(0);
  }, []);
  const setting = {
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    afterChange: (idx) => setIDX(idx),
  };
  return (
    <section className="MainVisual">
      <figure className="backImg">
        <Slider {...setting} ref={mainSlide}>
          {SLIDER.map((it, idx) => {
            return (
              <div className={`mainSlide item0` + it.id + (idx === IDX ? " on" : "")} key={it.id} ref={mainSlide} >
                  <h2>{it.content}</h2>
              </div>
            );
          })}
        </Slider>
      </figure>
    </section>
  );
};

export default MainVisual;
