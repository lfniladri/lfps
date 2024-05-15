import firebase_app from "../config";
import {
  getFirestore,
  doc,
  getDoc,
  getDocs,
  collection,
} from "firebase/firestore";

const db = getFirestore(firebase_app);


/**
 * Fetch a single document by using id
 * @param collection 
 * @param id 
 * @returns 
 */
async function getDoument(collection: any, id: string) {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = await getDoc(docRef);
  } catch (e) {
    error = e;
  }

  return { result, error };
}


/**
 * Fetch all the docuemnt
 * @param collectionName 
 * @returns 
 */
async function getAllDocument(collectionName: string) {
    const querySnapshot = await getDocs(collection(db, collectionName)); // Assuming `db` is defined somewhere
  
    let documents:any = [];
    querySnapshot.forEach(doc => {
      documents.push({ id: doc.id, data: doc.data() });
    });
  
    return documents;
  }

export { getDoument, getAllDocument };
