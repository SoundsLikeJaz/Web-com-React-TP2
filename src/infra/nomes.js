export default async function obterNomes(ano) {
    let retorno = [];
    const url = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/ranking/?decada=${ano}`;
    await fetch(url)
        .then((resposta) => resposta.json())
        .then((nomes) => {
            retorno = nomes[0].res;
        })
        .catch((erro) => retorno.erro = erro);
    return retorno;
}