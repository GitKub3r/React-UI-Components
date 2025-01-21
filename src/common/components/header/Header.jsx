import React from "react";
import { Link } from "react-router";
import "./header.css";

export const Header = ({ items }) => {
  if (!items || items.length === 0) {
    return null; // or handle the case when items is undefined or empty
  }

  const [firstItem, ...restItems] = items;

  return (
    <header className="main-header">
      <h1>
        <Link to={firstItem.path} className="main-header-title">
          {firstItem.name}
        </Link>
      </h1>
      <nav className="main-header-nav">
        <ul>
          {restItems.map((item, index) => (
            <li key={index}>
              <Link to={item.path} className="hover-link">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
