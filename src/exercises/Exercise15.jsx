// Exercise15.js
import React, { useEffect, useState } from "react";
import obterMunicipios from "../infra/municipios";
import obterEstados from "../infra/estados";

const Exercise15 = () => {
  const [estados, setEstados] = useState([]);

  const [estado, setEstado] = useState(0);

  const [municipios, setMunicipios] = useState([]);

  const [tempArray, setTempArray] = useState([...municipios]);

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
        setTempArray(lista);
      }
    }

    carregarMunicipios();
  }, [estado]);

  function handleEstadoChange(event) {
    setEstado(parseInt(event.target.value));
  }

  function handleFiltrarMunicipio(event) {
    const value = event.target.value;
    setTempArray(
      municipios.filter((municipio) => {
        return municipio.nome.toLowerCase().includes(value.toLowerCase());
      })
    );
  }

  return (
    <div>
      <h1>Exercise 15</h1>
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
          <label htmlFor="filtroMunicipio">Pesquisar município: </label>
          <input type="text" id="filtroMunicipio" onChange={handleFiltrarMunicipio} placeholder="Nome do município" />
          <ul>
            {tempArray.map((municipio) => (
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

export default Exercise15;
