<template>
  <div v-if="note">
    <div>
      <button @click="deleteNote(note.id)">Delete Note</button>
    </div>
    <h1>{{ note.title }}</h1>
    <p>Tags: {{ note.tags.join(', ') }}</p>
    <p>Content: {{ note.content }}</p>
    <p>Last Edited: {{ note.lastEdited }}</p>
  </div>
  <p v-else>Note not found</p>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useNoteStore } from '@/stores/noteStore';
import NoteModel from '@/models/NoteModel';

// Récupération du paramètre "id" dans la route
const route = useRoute();
const router = useRouter();
const id = route.params.id as string;

const note = ref<NoteModel | null>(null);
const noteStore = useNoteStore();

onMounted(() => {
  // Rechercher la note par ID dans le store
  note.value = noteStore.notes.find((n) => n.id === id) || null;
});

const deleteNote = (id: string) => {
  noteStore.deleteNoteFromLocalStorage(id);
  router.push({ name: 'notes' });
};
</script>
