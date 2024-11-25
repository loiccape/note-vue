<template>
  <section class="m-4">
    <div class="flex justify-between">
      <h2 class="text-4xl font-bold">All Notes</h2>
      <Input class="w-1/4 hidden lg:block" placeholder="Search by title, content, or tags…"/>
    </div>
    <div class="mt-4">
      <!-- Boucle sur les notes et passe chaque note au composant NoteComponent -->
      <NoteComponent v-for="(note, index) in notes" :key="index" :note="note" :index="index" />
      <button ><a href="/notes/create-note">Ajouter une note</a></button>
      <Button>Click me</Button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore';
import NoteComponent from '@/components/note-components/NoteComponent.vue';

//imports shadcn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'


const noteStore = useNoteStore();

// Récupération des notes dans le store
const notes = noteStore.notes; 


</script>

