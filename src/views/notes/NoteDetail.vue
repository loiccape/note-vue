<template>
    <div v-if="note">
      <h1>{{ note.title }}</h1>
      <p>Tags: {{ note.tags.join(', ') }}</p>
      <p>Content: {{ note.content }}</p>
      <p>Last Edited: {{ note.lastEdited }}</p>
    </div>
    <p v-else>Note not found</p>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import { useNoteStore } from '@/stores/noteStore';
  import NoteModel from '@/models/NoteModel';
  
  //recuperation du paramatre "id" dans la route 
  const route = useRoute();
  const id = route.params.id as string;
  
  const note = ref<NoteModel | null>(null);
  
  const noteStore = useNoteStore();
  
  onMounted(() => {
    // Rechercher la note par ID dans le store
    note.value = noteStore.notes.find((n) => n.id === id) || null;
  });
  </script>
  