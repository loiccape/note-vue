<template>
  <div>
    <!-- Boucle sur les notes et passe chaque note au composant NoteComponent -->
    <NoteComponent v-for="(note, index) in notes" :key="index" :note="note" :index="index" />
  </div>
  <button ><a href="/notes/create-note">Ajouter une note</a></button>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore';
import NoteComponent from '@/components/note-components/NoteComponent.vue';
import type NoteModel from '@/models/NoteModel';



const noteStore = useNoteStore();

// Récupération des notes dans le store
const notes = noteStore.notes; 


</script>

