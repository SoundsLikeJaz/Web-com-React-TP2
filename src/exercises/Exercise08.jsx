// Exercise08.js
import { faker } from "@faker-js/faker";
import React, { useRef, useState } from "react";

const Exercise08 = () => {

  const nomes = new Array(100).fill().map((value) => {
    return faker.person.fullName();
  });

  const [pessoas, setPessoas] = useState([...nomes]);

  const nomeRef = useRef("");

  function handleClick() {
    setPessoas([...pessoas, nomeRef.current.value]);
    nomeRef.current.value = "";
  }

  return (
    <div>
      <h1>Exercise 08</h1>
      <div>
        <label htmlFor="nome">Insira o nome: </label>
        <input type="text" id="nome" ref={nomeRef} />&nbsp;
        <button onClick={handleClick}>Adicionar</button>
      </div>
      <div>
        <h2>Nomes</h2>
        <ul>
          {pessoas.map((pessoa, index) => (
            <li key={index}>{pessoa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercise08;
