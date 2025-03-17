import React, { useState } from "react";
import "./tarefas.css";
import imgBtn from "../assets/check.ico";
import msgError from "../assets/msg_error.ico";

const Tarefas = ({ selectedIcon }) => {
  const [tarefa, setTarefa] = useState("");
  const [listaTarefas, setListaTarefas] = useState([]);

  const addItem = () => {
    if (tarefa.trim() === "") {
      alert("Por favor, insira uma tarefa.");
      return;
    }

    const tarefasDivididas = tarefa
      .split(";")
      .map((item) => item.trim())
      .filter((item) => item !== "");

    if (tarefasDivididas.length > 0) {
      const novasTarefas = tarefasDivididas.map((tarefa) => ({
        icon: selectedIcon,
        tarefas: [tarefa],
      }));
      setListaTarefas([...listaTarefas, ...novasTarefas]);
      setTarefa("");
    }
  };

  const removeItem = (index) => {
    const novaLista = listaTarefas.filter((_, i) => i !== index);
    setListaTarefas(novaLista);
  };

  return (
    <>
      <div className="inputContainer">
        <input
          className="inputTarefa"
          type="text"
          placeholder="Digite aqui... (Use ';' para separar)"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
        />
        <button className="btnTarefa" onClick={addItem}>
          <img
            src={imgBtn}
            alt="Icone Adicionar item à lista"
            className="icon"
          />
        </button>
      </div>

      <div className="square">
        {listaTarefas.length > 0 ? (
          <ul>
            {listaTarefas.map((item, index) => (
              <li key={index} className="tarefaItem">
                <span className="task-icon">{item.icon}</span>
                {item.tarefas.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
                <button
                  className="btnExcluir"
                  onClick={() => removeItem(index)}
                >
                  <img
                    src={msgError}
                    alt="Excluir item"
                    className="iconExcluir"
                  />
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <strong>Nenhuma tarefa adicionada ainda.</strong>
        )}
      </div>
    </>
  );
};

export default Tarefas;
