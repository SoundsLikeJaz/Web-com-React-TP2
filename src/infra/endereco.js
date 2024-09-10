export default async function obterEndereco(cep) {
    let retorno = new Object();
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    await fetch(url)
        .then((response) => response.json())
        .then((endereco) => {
            retorno = endereco;
        })
        .catch((error) => retorno.erro = "CEP Inválido");
    return retorno;
}