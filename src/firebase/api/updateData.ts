import firebase_app from "../config";
import { getFirestore, doc, updateDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function update(collection: any, id: string, data: any) {
    let result = null;
    let error = null;

    try {
        result = await updateDoc(doc(db, collection, id), data);
    } catch (e) {
        error = e;
    }

    return { result, error };
}
