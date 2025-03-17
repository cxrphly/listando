import React from "react";
import "./window.css";
import Buttons from "./Buttons";
import Barra from "./Barra";
import Tarefas from "./Tarefas";
import Decorations from "./Decorations";
import AsciiArt from "./AsciiArt";
import ResolutionInput from "./ResolutionInput";

const Window = () => {
  return (
    <div className="win98popup shadow">
      <Barra title="Lista_ai" />
      <ResolutionInput />
      <Tarefas />
      <Decorations />
      <AsciiArt />
      <Buttons />
    </div>
  );
};

export default Window;
