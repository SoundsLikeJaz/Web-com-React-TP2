// Exercise10.js
import { faker } from "@faker-js/faker";
import React, { useRef, useState } from "react";

const Exercise10 = () => {
  const individuos = new Array(100).fill().map((value) => {
    const individuo = new Object();
    individuo.nome = faker.person.fullName();
    individuo.cargo = faker.name.jobTitle();
    return individuo;
  });

  const [pessoas, setPessoas] = useState([...individuos]);

  const [temp, setTemp] = useState([...pessoas]);

  const nomeRef = useRef("");
  const cargoRef = useRef("");

  function handleClick() {
    if (nomeRef.current.value !== "" && cargoRef.current.value !== "") {
      const individuo = {
        nome: nomeRef.current.value,
        cargo: cargoRef.current.value,
      };
      setPessoas([...pessoas, individuo]);
      nomeRef.current.value = "";
      cargoRef.current.value = "";
    } else {
      alert("Preencha os campos");
    }
  }

  function handleFilterNome(event) {
    const value = event.target.value;
    console.log(value);
    setTemp(
      pessoas.filter((pessoa) => {
        return pessoa.nome.toLowerCase().startsWith(value.toLowerCase());
      })
    );
  }

  function handleFilterCargp(event) {
    const value = event.target.value;
    console.log(value);
    setTemp(
      pessoas.filter((pessoa) => {
        return pessoa.cargo.toLowerCase().startsWith(value.toLowerCase());
      })
    );
  }

  return (
    <div>
      <h1>Exercise 10</h1>
      <div>
        <label htmlFor="nome">Insira o nome: </label>
        <input type="text" id="nome" ref={nomeRef} />&nbsp;
        <label htmlFor="cargo">Insira o cargo: </label>&nbsp;
        <input type="text" id="cargo" ref={cargoRef} />&nbsp;
        <button onClick={handleClick}>Adicionar</button>
      </div>
      <div>
        <h2>Nomes</h2>
        <label htmlFor="filtroNome">Pesquisar nome: </label>
        <input type="text" id="filtroNome" onChange={handleFilterNome} /> <br />
        <br />
        <label htmlFor="filtroCargo">Pesquisar cargo: </label>
        <input type="text" id="filtroCargo" onChange={handleFilterCargp} />
        <ul>
          {temp.map((pessoa, index) => (
            <li key={index}>{pessoa.nome} - {pessoa.cargo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Exercise10;
