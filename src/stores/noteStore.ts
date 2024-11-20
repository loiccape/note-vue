import { defineStore } from 'pinia';
import { ref, watch } from 'vue';
import NoteModel from '@/models/NoteModel';
import notesData from '@/data/notes.json';

const LOCAL_STORAGE_KEY = 'notes';

export const useNoteStore = defineStore('note', () => {

  // Initialisation des notes depuis le fichier JSON et stockage dans le state
  const notes = ref<NoteModel[]>(
    notesData.map((noteData) => NoteModel.fromJSON(noteData))
  );
  
  // Sauvegarde des notes dans le localStorage
  const saveNotesToLocalStorage = () => {
    console.log("Saving to localStorage...", notes.value);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(notes.value));
  };

 saveNotesToLocalStorage()

// Supprime une note par ID
const deleteNoteFromLocalStorage = (id: string) => {
  console.log("delete note");
  
  // Récupérer les notes depuis localStorage
  let noteList = localStorage.getItem(LOCAL_STORAGE_KEY);
  
  if (noteList) {
    let noteArray = JSON.parse(noteList);
    
    // Filtrer les notes pour supprimer la note par son ID
    const updatedNotes = noteArray.filter((note: any) => note.id !== id);
    
    // Mettre à jour le localStorage avec la liste mise à jour
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedNotes));
    
    // Mettre à jour le state `notes` avec la nouvelle liste
    notes.value = updatedNotes.map((noteData: any) => NoteModel.fromJSON(noteData));
  }
};

const addNote = (noteToAdd : NoteModel) => {
notes.value.push(noteToAdd)
saveNotesToLocalStorage()
}
  return { notes , deleteNoteFromLocalStorage, addNote};
});
