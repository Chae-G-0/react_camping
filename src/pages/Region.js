import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Camp from "../component/Camp";

const RegionList = styled.ul`
  width: 1200px;
  margin: 100px auto;
  display: flex;
  justify-content: space-between;
  border: 1px solid #ddd;
  font-size: 19px;
  line-height: 100px;
  li {
    cursor: pointer;
  }
`;

const Region = ({ camp }) => {
  const [locate, setLocate] = useState();
  useEffect(() => {
    const filter = [...camp].filter((it) => {
      return it.doNm == "경상남도";
    });
    setLocate(filter);
  }, []);
  return (
    <div>
      <RegionList>
        <li>전체</li>
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
        <li
          onClick={() => {
            setLocate(locate);
          }}
        >
          경상도
        </li>
        <li>제주도</li>
      </RegionList>
      <Outlet></Outlet>
      <Camp camp={camp} />
    </div>
  );
};

export default Region;
