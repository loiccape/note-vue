<template>
    <div @click="goToNoteDetail">
      <p>{{ note.title }}</p>
      <p>{{ note.tags.join(', ') }}</p>
      <p>{{ note.content }}</p>
      <p>{{ note.lastEdited }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import NoteModel from '@/models/NoteModel';
  import { useRouter } from 'vue-router';
  
  // Utilisation du composable useRouter
  const router = useRouter();
  

  const props  = defineProps<{
    note: NoteModel;
    index: number;
  }>();
  

const goToNoteDetail = () => {
  router.push({ name: 'noteDetail', params: { index: props.index.toString() } });
};
  </script>
  
 