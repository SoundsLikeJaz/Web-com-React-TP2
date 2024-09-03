// Exercise05.js
import React, { useReducer, useState } from "react";

const Exercise05 = () => {

  const [novaTarefa, setNovaTarefa] = useState("");

  const [tarefas, updateTarefas] = useReducer(tarefasReducer, []);

  function handleChange(event) {
    setNovaTarefa(event.target.value);
  }

  function tarefasReducer(state, action) {
    switch (action.type) {
      case "adicionar":
        setNovaTarefa("");
        return [...state, action.tarefa];
      case "remover":
        return state.filter((tarefa) => tarefa !== action.tarefa);
      default:
        throw Error(`Ação desconhecida: ${action.type}`);
    }
  }

  return (
    <div>
      <h1>Exercise 05</h1>
      <div>
        <label htmlFor="novaTerefa">Insira a nova tarefa: </label>
        <input type="text" id="novaTarefa" value={novaTarefa} onChange={handleChange} /> &nbsp;
        <button onClick={() => updateTarefas({ type: "adicionar", tarefa: novaTarefa })}>Adicionar</button>
      </div>
      <div>
        <h2>Tarefas</h2>
        <ul>
          {tarefas.map((tarefa, index) => (
            <li key={index}>
              {tarefa} &nbsp;
              <button onClick={() => updateTarefas({ type: "remover", tarefa })}>Remover</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercise05;
