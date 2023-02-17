import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";
import Camp from "../component/Camp";
import Totop from "../component/Totop";

const RegionList = styled.ul`
  width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  font-size: 17px;
  font-weight: 500;
  li {
    border: 1px solid #777;
    padding 5px 10px;
    border-radius: 15px; 
    :hover {
      background: #777;
      color: #fff;
    }
  }
`;

const Region = ({ campingData, cityList }) => {
  return (
    <div className="Region">
      <RegionList>
        <li>
          <Link to="/region">전체</Link>
        </li>
        {[...cityList].map((doNm, idx) => {
          return (
            <li key={idx}>
              <NavLink to={`/region/camp/${doNm}`}>{doNm}</NavLink>
            </li>
          );
        })}
      </RegionList>
      <Camp campingData={campingData} />
      <Totop />
    </div>
  );
};

export default React.memo(Region);
