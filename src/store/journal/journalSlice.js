import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    saving: false,
    messageSaved: "",
    notes: [],
    active: null,
    //  active: {
    //     id: '',
    //     title: '',
    //     body: '',
    //     date: '',
    //     imageURL: [],
    //  }
  },
  reducers: {
    savingNewNote: (state) => {
      state.saving = true;
    },
    addNewEmptyNote: (state, action) => {
      state.notes.push(action.payload);
      state.saving = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
      state.messageSaved = "";
      state.saving = false;
    },
    setSaving: (state) => {
      state.saving = true;
      state.messageSaved = "";
    },
    updateNode: (state, action) => {
      state.saving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === action.payload.id) {
          //return { ...note, ...action.payload };
          return action.payload;
        }
        return note;
      });
      state.messageSaved = `${action.payload.title}, updated successfully`;
    },
    setPhotosToActiveNote: (state, action) => {
      state.active.imageURL = [...state.active.imageURL, ...action.payload];
      state.saving = false;
    },
    clearNotesLogout: (state) => {
      state.saving = false;
      state.notes = [];
      state.active = null;
      state.messageSaved = "";
    },
    deleteNoteById: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      state.active = null;
      state.messageSaved = "";
    },
  },
});

export const {
  addNewEmptyNote,
  setActiveNote,
  setNotes,
  setSaving,
  updateNode,
  deleteNoteById,
  savingNewNote,
  setPhotosToActiveNote,
  clearNotesLogout,
} = journalSlice.actions;
