// Exercise16.jsx

import { useState } from "react";
import obterEndereco from "../infra/endereco";

const Exercise16 = () => {

  const [endereco, setEndereco] = useState({});

  async function handleCep(event) {
    const cep = event.target.value;
    if (cep.length === 8) {
      await obterEndereco(cep).then((endereco) => {
        setEndereco(endereco);
      });
    } else {
      setEndereco({});
    }
  }

  return (
    <div>
      <h1>Exercise 16</h1>
      <div>
        <h2>Obter endereço</h2>
        <label htmlFor="cep">Insira seu CEP: </label>
        <input type="number" name="cep" id="cep" onChange={handleCep} />
        <br />
        {endereco.erro && <div style={{ color: "red" }}>{endereco.erro}</div>}
        {endereco.logradouro && (
          <div>
            <ul>
              <li><strong>Estado:</strong> {endereco.estado}</li>
              <li><strong>Cidade:</strong> {endereco.localidade}</li>
              <li><strong>Bairo:</strong> {endereco.bairro}</li>
              <li><strong>Rua:</strong> {endereco.logradouro}</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Exercise16;
