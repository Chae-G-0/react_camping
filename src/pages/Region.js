import React from 'react'
import styled from "styled-components";

const RegionList = styled.ul`
    display: flex;
    gap: 20px;
`;

const Region = () => {
  return (
    <div>
      <RegionList>
        <li>서울</li>
        <li>경기</li>
        <li>강원</li>
        <li>인천</li>
        <li>부산</li>
        <li>대전</li>
        <li>대구</li>
        <li>울산</li>
        <li>충청북도</li>
        <li>충청남도</li>
        <li>전라북도</li>
        <li>전라남도</li>
        <li>경상북도</li>
        <li>경상남도</li>
      </RegionList>
    </div>
  );
}

export default Region