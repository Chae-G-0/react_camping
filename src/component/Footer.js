import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    height: 80px;
    background: #333;
    color: #ddd;
    text-align: center;
    line-height: 80px;
    font-size: 15px;
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="inner">포트폴리오 용도로 제작된 웹 사이트입니다.</div>
    </FooterStyle>
  );
};

export default Footer;
