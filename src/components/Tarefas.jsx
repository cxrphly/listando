import React from "react";
import "./tarefas.css";
import imgBtn from "../assets/check.ico";

const Tarefas = () => {
  return (
    <>
      <div className="inputContainer">
        <input
          className="inputTarefa"
          type="text"
          placeholder="Digite aqui..."
        />
        <button className="btnTarefa">
          <img src={imgBtn} alt="Icone Adicionar" className="icon" />
        </button>
      </div>
      <div className="square"></div>
    </>
  );
};

export default Tarefas;
