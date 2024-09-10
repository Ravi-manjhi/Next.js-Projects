// DropdownComponent.js
import React from "react";
import styles from "./dropdown.module.scss";

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <select className={styles.select} id="dropdown">
        <option value="option1">2024</option>
        <option value="option2">2023</option>
        <option value="option3">2022</option>
      </select>
    </div>
  );
};

export default Dropdown;
