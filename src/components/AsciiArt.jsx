import React, { useState } from "react";
import asciiArtData from "./asciiArtData.json";
import "./asciiArt.css";

const AsciiArt = () => {
  const [selectedArt, setSelectedArt] = useState(asciiArtData[0].art);

  const handleArtChange = (event) => {
    const selectedArtName = event.target.value;
    const art = asciiArtData.find((art) => art.name === selectedArtName).art;
    setSelectedArt(art);
  };

  return (
    <div className="ascii">
      <select className="ascii-dropdown" onChange={handleArtChange}>
        {asciiArtData.map((art, index) => (
          <option key={index} value={art.name}>
            {art.name}
          </option>
        ))}
      </select>

      <div className="ascii-display">{selectedArt}</div>
    </div>
  );
};

export default AsciiArt;
