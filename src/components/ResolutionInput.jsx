import { useState } from "react";
import "./resolutionInput.css";

const ResolutionInput = ({ onResize }) => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");

  const handleWidthChange = (e) => setWidth(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);

  const handleSubmit = () => {
    if (onResize) {
      onResize({ width, height });
    }
  };

  return (
    <div className="inputRes">
      <img src="../src/assets/aga-4x.webp" alt="hi" />
      <h3>Folha em milimetros.</h3>
      <input
        id="input_width"
        type="number"
        className="input"
        placeholder="largura"
        value={width}
        onChange={handleWidthChange}
      />
      <input
        id="input_height"
        type="number"
        className="input"
        placeholder="altura"
        value={height}
        onChange={handleHeightChange}
      />
    </div>
  );
};

export default ResolutionInput;
