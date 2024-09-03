// Exercise13.js
import React, { useEffect, useState } from "react";
import obterEstados from "../infra/estados";
import obterMunicipios from "../infra/municipios";

const Exercise13 = () => {
  const [estados, setEstados] = useState([]);

  const [estado, setEstado] = useState(0);

  const [municipios, setMunicipios] = useState([]);

  useEffect(() => {
    async function carregarEstados() {
      const lista = await obterEstados();
      setEstados(lista);
    }

    carregarEstados();
  }, []);

  useEffect(() => {
    async function carregarMunicipios() {
      if (estado > 0) {
        const lista = await obterMunicipios(estado);
        setMunicipios(lista);
      }
    }

    carregarMunicipios();
  }, [estado]);

  function handleEstadoChange(event) {
    setEstado(parseInt(event.target.value));
  }

  return (
    <div>
      <h1>Exercise 13</h1>
      <div>
        <h2>Estados</h2>
        <select id="estados" onChange={handleEstadoChange} >
          <option value="" disabled>Selecione um estado</option>
          {estados.map((estado) => (
            <option key={estado.id} value={estado.id}>
              {estado.nome}
            </option>
          ))}
        </select>
      </div>
      {municipios.length > 0 && (
        <div>
          <h2>Municípios</h2>
          <ul>
            {municipios.map((municipio) => (
              <li key={municipio.id}>
                {municipio.nome}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Exercise13;
