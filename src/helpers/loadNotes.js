import { collection, getDocs } from "firebase/firestore";
import { firebaseDB } from "../firebase";

export const loadNotes = async (uid='') => {
    if(!uid) throw new Error('The uid does not exist');

    const colectionRef = await collection(firebaseDB, `${uid}/journal/notes`);
    const notesArray = await getDocs(colectionRef);
    const notes = notesArray.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }));
    return notes;
}