import React from "react";
import styled from "styled-components";

const RegionList = styled.ul`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  font-size: 19px;
`;

const Region = ({ camp }) => {
  return (
    <RegionList>
      <li>서울</li>
      <li>경기</li>
      <li>강원</li>
      <li>인천</li>
      <li>부산</li>
      <li>대전</li>
      <li>대구</li>
      <li>울산</li>
      <li>충청도</li>
      <li>전라도</li>
      <li>경상도</li>
      <li>제주도</li>
    </RegionList>
  );
};

export default Region;
