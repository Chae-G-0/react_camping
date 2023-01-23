// import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import styled from "styled-components";
import Camp from "../component/Camp";

const RegionList = styled.ul`
  width: 1200px;
  margin: 50px auto;
  display: flex;
  justify-content: space-between;
  font-size: 21px;
`;

const Region = ({ camp, cityList }) => {
  return (
    <div>
      <RegionList>
        <li>
          <Link to='/region'>전체</Link>
        </li>
        {[cityList].map((it, idx) => {
          return (
            <li key={idx}>
              <Link to={`/camp/${it}`}>{it}</Link>
            </li>
          );
        })}
      </RegionList>
      <Outlet></Outlet>
      <Camp camp={camp} />
    </div>
  );
};

export default Region;
