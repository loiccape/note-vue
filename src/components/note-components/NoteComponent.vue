<template>
    <div @click="goToNoteDetail(note.id)">
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
  

defineProps<{
    note: NoteModel;
  }>();
  

const goToNoteDetail = (noteId:string) => {
  router.push({ name: 'noteDetail', params: { id: noteId } });
};
  </script>
  
 