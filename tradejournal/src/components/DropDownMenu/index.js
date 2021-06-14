import React from "react";
import "./style.scss";

const DropDownMenu = ({ list }) => {
  return (
    <ul className="list">
      {list.map((item, i) => (
        <li className="list-item" key={i}>
          <a href={item.link}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropDownMenu;
