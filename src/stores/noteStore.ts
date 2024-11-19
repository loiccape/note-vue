// store/noteStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';
import NoteModel from '@/models/NoteModel'; // Assurez-vous que le modèle existe

// Importation du fichier JSON
import notesData from '@/data/notes.json';

export const useNoteStore = defineStore('note', () => {
  // State: où nous stockons nos notes
  const notes = ref<NoteModel[]>([]);

  // Action: pour charger les notes
  const loadNotes = () => {
    notes.value = notesData.map((noteData) => NoteModel.fromJSON(noteData));
  };

  // Charger les notes lors de l'initialisation du store
  loadNotes();

  return { notes, loadNotes };
});
