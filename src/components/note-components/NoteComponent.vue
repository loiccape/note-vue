<template>
    <div @click="goToNoteDetail(note.id)" class="p-1 text-text border-b-2">
      <p class=" text-1xl font-semibold">{{ note.title }}</p>
      <Badge v-for="tag in note.tags" :key="tag" class="mr-2 mt-2">{{ tag }}</Badge>
      <!-- <p>{{ note.content }}</p> -->
      <p class="mt-1 text-slate-500">{{ note.getFormattedDate() }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import NoteModel from '@/models/NoteModel';
  import { useRouter } from 'vue-router';

  //imports shadcn
  import { Badge } from '@/components/ui/badge'


  // Utilisation du composable useRouter
  const router = useRouter();
  

defineProps<{
    note: NoteModel;
  }>();
  

const goToNoteDetail = (noteId:string) => {
  router.push({ name: 'noteDetail', params: { id: noteId } });
};
  </script>
  
 