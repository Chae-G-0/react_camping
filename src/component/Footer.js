import React from "react";
import styled from "styled-components";

const FooterStyle = styled.footer`
    height: 100px;
    background: #333;
    color: #fff;
    text-align: center;
    line-height: 100px;
`

const Footer = () => {
  return (
    <FooterStyle>
      <div className="inner">footer</div>
    </FooterStyle>
  );
};

export default Footer;
