import { collection, doc, setDoc } from "firebase/firestore";
import { firebaseDB } from "../../firebase";
import {
  addNewEmptyNote,
  setActiveNote,
  savingNewNote,
  setNotes,
  setSaving,
  updateNode,
  setPhotosToActiveNote,
} from "./journalSlice";
import { fileUpload, loadNotes } from "../../helpers";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(savingNewNote());

    const { uid } = getState().auth;
    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
      imageURL: [],
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));

    //console.log(uid, newNote);
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const docs = await loadNotes(uid);
    dispatch(setNotes(docs));
  };
};

export const startSaveNote = () => {
  return async(dispatch, getState) =>{
    dispatch(setSaving());
    const {uid} = getState().auth;
    const { active}  = getState().journal;
    const noteToFirestore = { ...active };
    delete noteToFirestore.id;
    const noteId = active.id;
    const docRef = doc(firebaseDB, `${uid}/journal/notes/${noteId}`);
    await setDoc(docRef, noteToFirestore, { merge: true });
    dispatch(updateNode(active));
  }
}

export const startUploadingFiles = (files = []) => {
  return async (dispatch) => {
     dispatch(setSaving()); 
     //await fileUpload(files[0]);
     const fileUploadPromises = [];
      for (const file of files) {
          fileUploadPromises.push(fileUpload(file));
      }
      const photoURL = await Promise.all(fileUploadPromises)
      dispatch(setPhotosToActiveNote(photoURL));};
};
