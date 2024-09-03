// Exercise09.js
import { faker } from "@faker-js/faker";
import React, { useRef, useState } from "react";

const Exercise09 = () => {
  const nomes = new Array(100).fill().map((value) => {
    return faker.person.fullName();
  });

  const [pessoas, setPessoas] = useState([...nomes]);

  const [temp, setTemp] = useState([...pessoas]);

  const nomeRef = useRef("");

  function handleClick() {
    setPessoas([...pessoas, nomeRef.current.value]);
    nomeRef.current.value = "";
  }

  function handleFilter(event) {
    const value = event.target.value;
    console.log(value);
    setTemp(
      pessoas.filter((pessoa) => {
        return pessoa.toLowerCase().startsWith(value.toLowerCase());
      })
    );
  }

  return (
    <div>
      <h1>Exercise 09</h1>
      <div>
        <label htmlFor="nome">Insira o nome: </label>
        <input type="text" id="nome" ref={nomeRef} />&nbsp;
        <button onClick={handleClick}>Adicionar</button>
      </div>
      <div>
        <h2>Nomes</h2>
        <label htmlFor="filtro">Pesquisar: </label>
        <input type="text" id="filtro" onChange={handleFilter} />
        <ul>
          {temp.map((pessoa, index) => (
            <li key={index}>{pessoa}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercise09;
