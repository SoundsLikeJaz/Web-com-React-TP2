// Component: Exercise01

import { useState } from "react";

const Exercise01 = () => {

  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Nome: ${nome} - Telefone: ${fone}`);
  }
  
  return (
    <div>
      <h1>Exercise 01</h1>
      <div>
        <h2>Formulário</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome:</label>&nbsp;
          <input type="text" id="nome" name="nome" value={nome} onChange={(event) => setNome(event.target.value)} />
          <br />
          <label htmlFor="fone">Telefone:</label>&nbsp;
          <input type="tel" id="fone" name="fone" value={fone} onChange={event => setFone(event.target.value)} />
          <br /> <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise01;
