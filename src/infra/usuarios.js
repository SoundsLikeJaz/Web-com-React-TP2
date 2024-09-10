import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";

export async function logarUsuario(email, senha) {
    let retorno = new Object();
    await signInWithEmailAndPassword(auth, email, senha)
        .then((credenciais) => {
            retorno.id = credenciais.user.uid;
            retorno.email = email;
            retorno.senha = senha;
        })
        .catch((error) => {
            retorno.erro = "Login Inválido";
        });
    return retorno;
}

export async function criarConta(email, senha) {
    let retorno = new Object();
    await createUserWithEmailAndPassword(auth, email, senha)
        .then((credenciais) => {
            retorno.id = credenciais.user.uid;
            retorno.email = email;
            retorno.senha = senha;
        })
        .catch((error) => {
            retorno.erro = "Login Inválido";
        });
    return retorno;
}