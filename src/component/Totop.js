import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { FiArrowUp } from "react-icons/fi";

const Btn = styled.div`
  position: fixed;
  bottom: 10%;
  right: 5%;
  color: #fff;
  background: #333;
  font-size: 30px;
  line-height: 0;
  padding: 10px;
  border-radius: 50%;
  visibility: hidden;
  opacity: 0;
  cursor: pointer;
  transition: 0.5s;
  z-index: 999;
  &.on {
    visibility: visible;
    opacity: 1;
  }
`;

const Totop = () => {
  const [scrollY, setScrollY] = useState(0);
  const totopHandler = () => {
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
  };

  const scrllEvent = () => {
    let scy = window.scrollY;
    setScrollY(scy);
  };

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", scrllEvent);
    return () => {
      window.removeEventListener("scroll", scrllEvent);
    };
  }, []);

  return (
    <Btn onClick={totopHandler} className={scrollY > 400 && "on"}>
      <FiArrowUp></FiArrowUp>
    </Btn>
  );
};

export default Totop;
