import React, { useState } from "react";

const Exercise01 = () => {

  const [pessoa, setPessoa] = useState({nome: 'João', idade: 25});

  function handleDiminuirIdade() {
    setPessoa({...pessoa, idade: pessoa.idade - 1});
  }

  function handleAumentarIdade() {
    setPessoa({...pessoa, idade: pessoa.idade + 1});
  }
  
  return (
    <div>
      <h1>Exercise 01</h1>
      <p>Aqui temos {pessoa.nome}!</p>
      <p>{pessoa.nome} tem {pessoa.idade} anos!</p>
      <p>Com os botões abaixo, você pode alterar a idade de {pessoa.nome}</p>&nbsp;
      <button onClick={handleDiminuirIdade}>Diminuir idade</button>&nbsp;
      <button onClick={handleAumentarIdade}>Aumentar idade</button>
    </div>
  );
};

export default Exercise01;
