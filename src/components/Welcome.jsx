import { useState, useRef } from "react";
import Barra from "./Barra";
import "./welcome.css";

const Welcome = ({ onClose }) => {
  const welcomeRef = useRef(null);
  const [position, setPosition] = useState({ x: 100, y: 100 });
  const [isDragging, setIsDragging] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - offset.x,
      y: e.clientY - offset.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={welcomeRef}
      className="welcome shadow"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <Barra title="Olá!" onClose={onClose} />
      <img src="../src/assets/wave-4x.webp" />

      <p className="welcome-text">
        Olá! Este é meu primeiro projeto com Vite + React, feito para ajudar a
        anotar e organizar ideias de forma prática. Inspirei-me em softwares
        antigos, adicionando arte ASCII e Kaomojis. Espero que seja útil!!
      </p>
      <a href="https://github.com/cxrphly/lista.ai" target="_blank">
        github
      </a>
    </div>
  );
};

export default Welcome;
