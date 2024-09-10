// Exercise15.js

import { useForm } from "react-hook-form";
import { logarUsuario } from "../infra/usuarios";

const Exercise15 = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  async function submeterDados(dados) {
    const sucesso = await logarUsuario(dados.email, dados.senha);
    if (sucesso.erro) {
      alert(sucesso.erro);
    } else {
      alert("Login efetuado com sucesso!");
      reset();
    }
  }

  return (
    <div>
      <h1>Exercise 15</h1>
      <div>
        <h2>Formulário</h2>
        <form onSubmit={handleSubmit(submeterDados)}>
        <label htmlFor="email">Email: </label>&nbsp;
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
          <label htmlFor="senha">Senha: </label>&nbsp;
          <input type="password" id="senha" name="senha" {...register("senha", {
            required: "O campo senha é obrigatório!",
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

export default Exercise15;
