<template>
    <form @submit.prevent="handleSubmit">
      <!-- Titre -->
      <input type="text" v-model="form.title" placeholder="Entrer un Titre" />
  
      <!-- Tags -->
      <div>
        <label>Tags</label>
        <input
          type="text"
          v-model="tagsInput"
          placeholder="Ajouter des tags (séparés par des virgules)"
        />
      </div>
  
      <!-- Contenu -->
      <div>
        <label>Contenu</label>
        <textarea v-model="form.content" placeholder="Contenu de la note"></textarea>
      </div>
  
      <!-- Bouton de soumission -->
      <button type="submit">Créer la Note</button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { reactive, ref } from 'vue';
  import NoteModel from '@/models/NoteModel';
  import { useNoteStore } from '@/stores/noteStore';
  
  const noteStore = useNoteStore();
  
  // Formulaire réactif
  const form = reactive<NoteModel>({
    id: '',
    title: '',
    tags: [], // Tableau pour les tags
    content: '',
    lastEdited: new Date(),
  });
  
  // Champ pour les tags saisis sous forme de chaîne
  const tagsInput = ref('');
  
  // Fonction pour parser les tags
  const parseTags = (tagsInput: string): string[] => {
    return tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
  };
  
  // Réinitialisation du formulaire
  const resetForm = () => {
    form.title = '';
    form.tags = [];
    form.content = '';
    tagsInput.value = '';
    form.lastEdited = new Date();
  };
  
  // Soumettre le formulaire
  const handleSubmit = () => {
    if (!formCheck()) {
      return;
    }
  
    // Convertir les tags en tableau
    form.tags = parseTags(tagsInput.value);
  
    // Créer une note
    const note = { ...form, id: generateId() };
    noteStore.addNote(note);
  
    // Réinitialiser le formulaire
    resetForm();
  
    console.log('Note créée :', note);
  };
  
  // Vérification des champs du formulaire
  const formCheck = (): boolean => {
    if (form.title.trim() === '') {
      alert('Veuillez entrer un titre');
      return false;
    }
  
    if (form.content.trim() === '') {
      alert('Veuillez entrer un contenu');
      return false;
    }
  
    return true;
  };
  
  // Générer un ID unique
  const generateId = (): string => {
    const notes = noteStore.notes;
    return (notes.length + 1).toString();
  };
  </script>
  