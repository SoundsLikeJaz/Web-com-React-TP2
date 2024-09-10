import { useForm } from "react-hook-form";


const Exercise04 = () => {

  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  function submeterDados() {
    reset();
  }

  return (
    <div>
      <h1>Exercise 04</h1>
      <div>
        <h2>Formulário</h2>
        <form onSubmit={handleSubmit(submeterDados)}>
          <label htmlFor="nome">Nome:</label>&nbsp;
          <input type="text" id="nome" name="nome" {...register("nome", {
            required: "O campo nome é obrigatório!"
          })} />
          {errors.nome?.message && (
            <div>
              <span style={{ color: "red" }}>{errors.nome.message}</span>
            </div>
          )}

          <br />
          <label htmlFor="fone">Telefone:</label>&nbsp;
          <input type="tel" id="fone" name="fone" {...register("fone", {
            required: "O campo telefone é obrigatório!"
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

export default Exercise04;
