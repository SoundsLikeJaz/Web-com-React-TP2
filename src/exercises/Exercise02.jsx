// Exercise02.js
import React, { useReducer } from "react";

const Exercise02 = () => {

  const [pessoa, updatePessoa] = useReducer(pessoaReducer, {nome: 'João', idade: 25});

  function pessoaReducer(state, action) {
    switch(action.type) {
      case 'diminuirIdade':
        return {...state, idade: state.idade - 1};
      case 'aumentarIdade':
        return {...state, idade: state.idade + 1};
      default:
        throw Error(`Ação desconhecida: ${action.type}`);
    }
  }
  
  return (
    <div>
      <h1>Exercise 02</h1>
      <p>Aqui temos {pessoa.nome}!</p>
      <p>{pessoa.nome} tem {pessoa.idade} anos!</p>
      <p>Com os botões abaixo, você pode alterar a idade de {pessoa.nome}</p>&nbsp;
      <button onClick={() => updatePessoa({ type: "diminuirIdade" })}>Diminuir idade</button>&nbsp;
      <button onClick={() => updatePessoa({ type: "aumentarIdade" })}>Aumentar idade</button>
    </div>
  );
};

export default Exercise02;