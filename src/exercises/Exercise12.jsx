// Exercise12.js
import React, { useEffect, useState } from "react";
import obterEstados from "../infra/estados";
import obterMunicipios from "../infra/municipios";

const Exercise12 = () => {

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
      <h1>Exercise 12</h1>
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
          <select id="municipios">
            <option value="" disabled>Selecione um município</option>
            {municipios.map((municipio) => (
              <option key={municipio.id} value={municipio.id}>
                {municipio.nome}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Exercise12;
