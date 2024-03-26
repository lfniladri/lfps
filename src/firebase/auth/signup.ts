import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(firebase_app);

// followed bellow document
// https://firebase.google.com/docs/auth/web/password-auth#web-modular-api

export default async function signUp(email: string, password: string) {
    let result = null,
        error = null;
    try {
        console.log("auth:", auth, "userName: ", email, "password: ", password);
        result = await createUserWithEmailAndPassword(auth, email, password);
        
    } catch (e) {
        error = e;
    }

    return { result, error };
}