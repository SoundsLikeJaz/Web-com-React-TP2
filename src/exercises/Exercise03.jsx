// Exercise03.js
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Exercise03 = () => {

  const [usuarios, setUsuarios] = useState([]);

  const {register, handleSubmit, formState: {errors}, reset} = useForm();

  function onSubmit(data) {
    setUsuarios([...usuarios, data]);
    console.log(usuarios);
    reset();
  }

  function aumentarIdade(usuario) {
    const novosUsuarios = usuarios.map((u) => {
      if (u === usuario) {
        return {...u, idade: Number(u.idade) + 1};
      }
      return u;
    });

    setUsuarios(novosUsuarios);
  }

  function diminuirIdade(usuario) {
    const novosUsuarios = usuarios.map((u) => {
      if (u === usuario) {
        return {...u, idade: u.idade - 1};
      }
      return u;
    });

    setUsuarios(novosUsuarios);
  }

  return (
    <div>
      <h1>Exercise 03</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="nome">Nome:</label>&nbsp;
        <input id="nome" {...register("nome", {
          required: "Este campo é obrigatório", 
          validate: {
            maxLength: value => value.length <= 20 || "O nome deve ter no máximo 20 caracteres"
          }
          })} />
        {errors.nome && <p>{errors.nome.message}</p>}

        <br />
        <br />

        <label htmlFor="idade">Idade: </label>
        <input id="idade" type="number" {...register("idade", {
          required: "Este campo é obrigatório", 
          validate: {
            min: value => value > 1 || "Insira uma idade válida",
            max: value => value < 100 || "Insira uma idade válida"
          }
          })} />
          {errors.idade && <p>{errors.idade.message}</p>}
        <br />
        <br />
        <button type="submit">Adicionar</button>
      </form>

      <h2>Usuários</h2>
      <ul>
        {usuarios.map((usuario, index) => (
          <>
            <li key={index}>{usuario.nome} - {usuario.idade} anos <br />
            <button onClick={() => aumentarIdade(usuario)}>Aumentar idade</button>
            <button onClick={() => diminuirIdade(usuario)}>Diminuir idade</button>
            </li>
            <br />
          </>
        ))}
      </ul>
    </div>
  );
};

export default Exercise03;
