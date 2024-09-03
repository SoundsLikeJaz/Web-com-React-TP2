export default async function obterEstados() {
    let retorno = [];
    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((estados) => {
            retorno = estados;
        })
        .catch((erro) => retorno.erro = erro);
    return retorno;
}