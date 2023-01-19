import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="Header">
      <h1>Go Camping</h1>
      <ul>
        <li>
          <NavLink to="/region">지역별</NavLink>
        </li>
        <li>
          <NavLink>테마별</NavLink>
        </li>
        <li>
          <NavLink>공지시항</NavLink>
        </li>
        <li>
          <NavLink>문의사항</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
