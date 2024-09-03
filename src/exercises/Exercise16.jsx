// Exercise16.js
import { useRef, useState } from "react";
import obterNomes from "../infra/nomes";

const Exercise16 = () => {

  const [nomes, setNomes] = useState([]);

  const decadaRef = useRef(2010);

  async function handleDecada() {
    let decada = parseInt(decadaRef.current.value);
    if (decada % 10 !== 0 || decada < 1920 || decada > 2010) {
      alert("Digite uma década válida");
      return;
    } else {
      const listaNomes = await obterNomes(decada);
      setNomes(listaNomes);
      decadaRef.current.value = "";
    }
  }
  return (
    <div>

      <h1>Exercise 16</h1>
      <div>
        <label htmlFor="decada">Insira a década: </label>
        <input type="number" id="decada" ref={decadaRef} />&nbsp;
        <br />
        <button onClick={handleDecada}>Buscar</button>
      </div>
      {nomes && (
        <div>
          <h2>Nomes</h2>
          <ul>
            {nomes.map((nome, index) => (
              <li key={index}>
                {nome.nome} &nbsp;
                <span>- {nome.ranking}º lugar com {nome.frequencia} pessoas nomeadas.</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exercise16;
