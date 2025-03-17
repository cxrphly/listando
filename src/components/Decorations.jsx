import React, { useState } from "react";
import iconsData from "./iconsData.json";
import "./decorations.css";

const Decorations = () => {
  const [selectedIcon, setSelectedIcon] = useState(iconsData[0].icon);

  const handleIconChange = (event) => {
    const selectedIcon = event.target.value;
    setSelectedIcon(selectedIcon);
  };

  return (
    <div className="icons">
      <select className="icons-dropdown" onChange={handleIconChange}>
        {iconsData.map((iconData, index) => (
          <option key={index} value={iconData.icon}>
            {iconData.icon}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Decorations;
