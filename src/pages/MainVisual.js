import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../style/main.scss";

const SLIDER = [
  { id: 1, content: "camping" },
  { id: 2, content: "지역별 캠핑장 검색" },
  { id: 3, content: "테마별 캠핑장 검색" },
  { id: 4, content: "캠핑장 정보 알아보기" },
  { id: 5, content: "디테일 정보 알아보기" },
];

const MainVisual = () => {
  const [IDX, setIDX] = useState();
  const mainSlide = useRef(null);
  useEffect(() => {
    setIDX(0);
  }, []);
  const setting = {
    arrows: false,
    autoplay: 1,
    pauseOnFocus: false,
    pauseOnHover: false,
    afterChange: (idx) => setIDX(idx),
  };
  return (
    <section className="MainVisual">
      <Slider {...setting} ref={mainSlide}>
        {SLIDER.map((it, idx) => {
          return (
            <figure
              key={it.id}
              ref={mainSlide}
              className={"item0" + it.id + (idx === IDX ? " on" : "")}
            >
              <div>
                <h2>{it.content}</h2>
              </div>
            </figure>
          );
        })}
      </Slider>
    </section>
  );
};

export default MainVisual;
