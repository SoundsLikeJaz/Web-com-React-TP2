export default async function obterMunicipios(estado) {
    let retorno = [];
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estado}/municipios`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((municipios) => {
            retorno = municipios;
        })
        .catch((erro) => retorno.erro = erro);
    return retorno;
}