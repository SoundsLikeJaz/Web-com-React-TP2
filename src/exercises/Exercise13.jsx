// Exercise13.js

import { useForm } from "react-hook-form";
import { excluirPessoa, inserirPessoa, listarPessoas, obterPessoa } from "../infra/pessoas";
import { useEffect, useState } from "react";
import ListaPessoas from "../componentes/ListaPessoas";

const Exercise13 = () => {

  const { register, handleSubmit, formState: { errors, isSubmitted }, reset, setValue } = useForm();

  const [pessoas, setPessoas] = useState([]);
  const [idEmEdicao, setIdEmEdicao] = useState("");

  useEffect(() => {
    async function fetchData() {
      const pessoas = await listarPessoas();
      setPessoas(pessoas);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
        if (idEmEdicao && !isSubmitted) {
            const contato = await obterPessoa(idEmEdicao);
            setValue("nome", contato.nome);
            setValue("email", contato.email);
            setValue("telefone", contato.telefone);
        } else {
            reset();
        }
    }

    fetchData();
}, [idEmEdicao]);

  async function submeterDados(dados) {
    const sucesso = await inserirPessoa(dados);
    if (sucesso) {
      alert("Pessoa cadastrada com sucesso.");
      const pessoas = await listarPessoas();
      setPessoas(pessoas);
      reset();
    } else {
      alert("Erro ao cadastrar pessoa.");
    }
  }

  async function handleExcluir() {
    await excluirPessoa(idEmEdicao);
    setIdEmEdicao("");
    const pessoas = await listarPessoas();
    setPessoas(pessoas);
  }

  return (
    <div>
      <h1>Exercise 13</h1>
      <div>
        <h2>Formulário</h2>
        <form onSubmit={handleSubmit(submeterDados)}>
          <label htmlFor="nome">Nome:</label>&nbsp;
          <input type="text" id="nome" {...register("nome", {
            required: "O campo nome é obrigatório!"
          })} />
          {errors.nome?.message && (
            <div>
              <span style={{ color: "red" }}>{errors.nome.message}</span>
            </div>
          )}
          <br />

          <label htmlFor="email">Email:</label>&nbsp;
          <input id="email" {...register("email", {
            required: "O campo email é obrigatório.",
            validate: {
              matchPattern: (v) => /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/i.test(v) || "Email inválido."
            }
          })} />
          {errors.email?.message && (
            <div style={{ color: 'red' }}>
              {errors.email.message}
            </div>
          )}
          <br />

          <label htmlFor="telefone">Telefone:</label>&nbsp;
          <input type="tel" id="telefone" {...register("telefone", {
            required: "O campo telefone é obrigatório!",
            validate: {
              matchPattern: (v) => /^[0-9]*$/.test(v) || "O campo telefone deve conter apenas números!",
              minLength: (v) => v.length >= 10 || "O campo telefone deve ter no mínimo 10 caracteres!",
              maxLength: (v) => v.length <= 11 || "O campo telefone deve ter no máximo 11 caracteres!"
            }
          })} />
          {errors.fone?.message && (
            <div>
              <span style={{ color: "red" }}>{errors.fone.message}</span>
            </div>
          )}
          <br />
          <input type="submit" value="Enviar" />&nbsp;
          {idEmEdicao && (
            <input type="button" value="Excluir" onClick={handleExcluir} />
          )}
        </form>
      </div>
      <div>
        <h2>Pessoas Cadastradas</h2>
        <ListaPessoas pessoas={pessoas} setIdEmEdicao={setIdEmEdicao} />
      </div>
    </div>
  );
};

export default Exercise13;
