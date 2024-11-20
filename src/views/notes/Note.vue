<template>
  <h2>Toutes les notes</h2>
  <div>
    <!-- Boucle sur les notes et passe chaque note au composant NoteComponent -->
    <NoteComponent v-for="(note, index) in notes" :key="index" :note="note" :index="index" />
  </div>
  <button ><a href="/notes/create-note">Ajouter une note</a></button>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore';
import NoteComponent from '@/components/note-components/NoteComponent.vue';



const noteStore = useNoteStore();

// Récupération des notes dans le store
const notes = noteStore.notes; 


</script>

