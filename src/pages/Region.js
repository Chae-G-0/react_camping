// import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Camp from "../component/Camp";
import Totop from "../component/Totop";

const RegionList = styled.ul`
  width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  font-size: 19px;
  li {
    border: 1px solid #000;
    padding 5px 10px;
    border-radius: 15px; 
    :hover {
      background: #000;
      color: #fff;
    }
  }
`;

const Region = ({ camp, cityList }) => {
  return (
    <div>
      <RegionList>
        <li>
          <Link to="/region">전체</Link>
        </li>
        {[...cityList].map((it, idx) => {
          return (
            <li key={idx}>
              <NavLink to={`/camp/${it}`}>{it}</NavLink>
            </li>
          );
        })}
      </RegionList>
      <Outlet/>
      <Camp camp={camp} />
      <Totop />
    </div>
  );
};

export default Region;
