<template>
  <div class="h-screen flex flex-col text-text">
    <!-- Barre supérieure -->
    <div class="flex p-4 w-full border">
      <h2 class="text-4xl font-bold mr-auto">All Notes</h2>
      <Input class="lg:w-1/4 hidden lg:block" placeholder="Search by title, content, or tags…" />
      <Button>Params</Button>
    </div>

    <!-- Contenu principal -->
    <div class="flex flex-1 overflow-hidden">
      <!-- Section gauche -->
      <section class="w-full lg:w-1/4 border  overflow-auto">
        <div class="flex flex-col items-center">
          <Button class="mt-2 text-white w-5/6 bg-secondary hidden lg:block">+ Create New Note</Button>
          <!-- Boucle sur les notes et passe chaque note au composant NoteComponent -->
          <NoteComponent
            v-for="(note, index) in notes"
            :key="index"
            :note="note"
            :index="index"

            @click="handleClickOnNote(index.toString())"
          />
        </div>
      </section>

      <!-- Section droite -->
      <section class="hidden lg:block flex-1 border overflow-auto p-4">
        <div v-if="note == null">
          <p class="text-3xl font-bold">{{notes[0].title}}</p>
       <div>
        <p>Tags : {{notes[0].tags}}</p>
        <p>LastEdited : {{notes[0].lastEdited}}</p>
       </div>
       <p>{{notes[0].content}}</p>

        </div>
        <div v-else class="">
          <p class="text-3xl font-bold">{{note.title}}</p>
       <div>
        <p>Tags : {{note.tags}}</p>
        <p>LastEdited : {{note.lastEdited}}</p>
       </div>
       <p>{{note.content}}</p>
       <div class="bg-red-500 "><p>ihuyhgiu</p></div>
        </div>
       
      </section>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useNoteStore } from '@/stores/noteStore';
import NoteComponent from '@/components/note-components/NoteComponent.vue';
import { ref } from 'vue';
//imports shadcn
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import type NoteModel from '@/models/NoteModel';


const noteStore = useNoteStore();

// Récupération des notes dans le store
const notes = noteStore.notes;

const note = ref<NoteModel>()

//lors du clique sur une note recupere la note la mets dans une variable
const handleClickOnNote = (id:string) =>{
  note.value = noteStore.notes.find((n)=> n.id === id)
  
}

//affiche le contenue de la variable dans la serniere section 

</script>
