 import { createSlice } from '@reduxjs/toolkit'
 
 export const journalSlice = createSlice({
     name: 'journal',
     initialState: {
         saving: false,
         messageSaved: '',
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
         },
         setNotes: (state, action) => {
             state.notes = action.payload;
             state.messageSaved = '';
             state.saving = false;
         },
         setSaving: (state, action) => {
             
         },
         updateNode: (state, action) => {
             
         },
        deleteNoteById: (state, action) => {
                
        },
     
     }     
     
 })
 
 
 export const { addNewEmptyNote, setActiveNote, setNotes, setSaving, updateNode, deleteNoteById, savingNewNote } = journalSlice.actions