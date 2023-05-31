import React, { useContext } from "react";
import { css } from "emotion";
import { Link } from "react-router-dom";
import HeaderContext from "./HeaderContext";

function Header() {
  const { menuItems } = useContext(HeaderContext);

  return (
    <div className={header}>
      <ul className={nav}>
        {menuItems.map((item) => (
          <li key={item}>
            <Link className={menuItem} to={`/${item.toLowerCase()}`}>
              {item}
            </Link>
          </li>
        ))}
        <li></li>
      </ul>
    </div>
  );
}

const header = css`
  background-color: darkred;
  color: white;
  padding: 1rem;
`;

const menuItem = css`
  font-size: 20px;
  font-family: Montserrat, sans-serif;
  color: white;
  text-decoration: none;
`;

const nav = css`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
`;

export default Header;
