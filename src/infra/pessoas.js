import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export async function inserirPessoa(novaPessoa) {
    const docRef = await addDoc(collection(db, "pessoas"), novaPessoa);
    return docRef.id;
}

export async function listarPessoas() {
    let retorno;
    await getDocs(collection(db, "pessoas"))
        .then((querySnapshot) => {
            retorno = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        });
    return retorno;
}

export async function obterPessoa(id) {
    const docRef = doc(db, "pessoas", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
}

export async function excluirPessoa(id) {
    await deleteDoc(doc(db, "pessoas", id));
}

export async function atualizarPessoa(id, novosDados) {
    const docRef = doc(db, "pessoas", id);
    await updateDoc(docRef, novosDados);
    return true;
}