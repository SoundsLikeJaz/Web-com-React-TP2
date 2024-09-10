// Exercise02.js

import { useState } from "react";

const Exercise02 = () => {

  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const [errorNome, setErrorNome] = useState("");
  const [errorFone, setErrorFone] = useState("");

  function handleNomeChange(event) {
    let value = event.target.value;
    if (!value) {
      setErrorNome("O campo nome é obrigatório!");
    } else {
      setErrorNome("");
    }
    setNome(value);
  }

  function handleFoneChange(event) {
    let value = event.target.value;
    if (!value) {
      setErrorFone("O campo telefone é obrigatório!");
    } else {
      setErrorFone("");
    }
    setFone(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nome: ${nome} - Telefone: ${fone}`);
  }
  
  return (
    <div>
      <h1>Exercise 02</h1>
      <div>
        <h2>Formulário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>&nbsp;
          <input type="text" id="nome" name="nome" value={nome} onChange={handleNomeChange} />
          {errorNome && <div><span style={{ color: "red" }}>{errorNome}</span></div>}
          <br />
          <label htmlFor="fone">Telefone:</label>&nbsp;
          <input type="tel" id="fone" name="fone" value={fone} onChange={handleFoneChange} />
          {errorFone && <div><span style={{ color: "red" }}>{errorFone}</span></div>}
          <br /> <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise02;