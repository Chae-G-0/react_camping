import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../style/main.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const SLIDER = [
  {
    id: 1,
    content: "Camping",
    des: "다양한 캠핑장 정보를 한눈에 확인해보세요",
  },
  {
    id: 2,
    content: "지역별 캠핑장 찾기",
    des: "원하는 지역의 캠핑장을 찾아보세요",
  },
  {
    id: 3,
    content: "캠핑 정보를 한 곳에서",
    des: "원활한 캠핑을 위해 꼭 필요한 사항은 해당 캠핑장에 미리 확인하시기 바랍니다",
  },
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
    autoplaySpeed: 4000,
    pauseOnFocus: false,
    pauseOnHover: true,
    afterChange: (idx) => setIDX(idx),
  };
  return (
    <section className="MainVisual">
      <figure className="backImg">
        <div className="container">
          <Slider {...setting} ref={mainSlide}>
            {SLIDER.map((it, idx) => {
              return (
                <div
                  className={
                    `mainSlide item0` + it.id + (idx === IDX ? " on" : "")
                  }
                  key={it.id}
                  ref={mainSlide}
                >
                  <h2>{it.content}</h2>
                  <p>{it.des}</p>
                </div>
              );
            })}
          </Slider>
          <div className="slideArrows">
            <button onClick={() => mainSlide.current.slickPrev()}>
              <FiArrowLeft />
            </button>
            <button onClick={() => mainSlide.current.slickNext()}>
              <FiArrowRight />
            </button>
          </div>
        </div>
      </figure>
    </section>
  );
};

export default MainVisual;
