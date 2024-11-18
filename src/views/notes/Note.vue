<template>
    <div>
      <!-- Boucle sur les notes et passe chaque note au composant NoteComponent -->
      <NoteComponent v-for="(note, index) in noti" :key="index" :note="note" :index="index"/>
    </div>
  </template>
  
<script setup lang="ts">
import NoteModel from '@/models/NoteModel';
import NoteComponent from '@/components/note-components/NoteComponent.vue';
import { ref, onMounted } from 'vue';
import { useNoteStore } from '@/stores/noteStore'; // Assurez-vous de bien importer le store

// Utilisation du store
const noteStore = useNoteStore();
const noti = ref<NoteModel[]>([]);

// Charger les notes lorsque le composant est monté
onMounted(() => {


  // Charger les notes dans le store
  noteStore.loadNotes();

  // Récupérer les notes du store dans le composant
  noti.value = noteStore.notes;
});
</script>
  