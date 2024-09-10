import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCIuWfmUNXpDEFOhyB0M-e0pzPiVrJhTKU",
    authDomain: "tp3-dr4-58cf3.firebaseapp.com",
    projectId: "tp3-dr4-58cf3",
    storageBucket: "tp3-dr4-58cf3.appspot.com",
    messagingSenderId: "932198608467",
    appId: "1:932198608467:web:8ccd47629549e60ed7a0a6"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);