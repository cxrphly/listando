import React, { useState } from "react";
import "./window.css";
import Buttons from "./Buttons";
import Barra from "./Barra";
import Tarefas from "./Tarefas";
import Decorations from "./Decorations";
import AsciiArt from "./AsciiArt";
import ResolutionInput from "./ResolutionInput";

const Window = () => {
  const [selectedIcon, setSelectedIcon] = useState(""); // O ícone selecionado inicialmente é vazio

  return (
    <div className="win98popup shadow">
      <Barra title="Lista_ai" />
      <ResolutionInput />

      {/* Passando o selectedIcon para Tarefas */}
      <Tarefas selectedIcon={selectedIcon} />

      {/* Passando a função setSelectedIcon para Decorations */}
      <Decorations setSelectedIcon={setSelectedIcon} />

      <AsciiArt />
      <Buttons />
    </div>
  );
};

export default Window;
