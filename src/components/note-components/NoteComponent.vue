<template>
    <div class="p-4 text-text border-b-2 w-full">
      <p class=" text-1xl md:text-2xl font-semibold">{{ note.title }}</p>
      <span v-for="tag in note.tags" :key="tag" class="mr-2 p-1 bg-background border">{{ tag }}</span>
      <p class="mt-1 text-slate-500">{{ note.getFormattedDate() }}</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import NoteModel from '@/models/NoteModel';
  

defineProps<{
    note: NoteModel;
  }>();
  


  </script>
  
 