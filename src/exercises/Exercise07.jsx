// Exercise07.js

import { useForm } from "react-hook-form";

const Exercise07 = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function submeterDados(dados) {
    alert(JSON.stringify(dados));
    reset();
  }

  return (
    <div>
      <h1>Exercise 07</h1>
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
          <input size={30} id="email" {...register("email", {
            required: "O campo email é obrigatório.",
            validate: {
              maxLength: (v) => v.length <= 50 || "O campo email pode ter no máximo 50 caracteres.",
            }
          })} />
          {errors.email?.message && (
            <div style={{ color: 'red' }}>
              {errors.email.message}
            </div>
          )}
          <br />

          <label htmlFor="fone">Telefone:</label>&nbsp;
          <input type="tel" id="fone" {...register("fone", {
            required: "O campo telefone é obrigatório!",
            validate: {
              matchPattern: value => /^[0-9]*$/.test(value) || "O campo telefone deve conter apenas números!",
            }
          })} />
          {errors.fone?.message && (
            <div>
              <span style={{ color: "red" }}>{errors.fone.message}</span>
            </div>
          )}
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
};

export default Exercise07;
