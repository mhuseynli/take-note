<template>
  <div class="notes">
    <AddEditNote
      v-model="newNote"
      ref="addEditNoteRef"
      placeholder="Write a new note 📝"
    >
      <template #buttons>
        <button
          @click="addNote"
          :disabled="newNote.trim() === ''"
          class="button is-link has-background-success"
        >
          Add New Note
        </button>
      </template>
    </AddEditNote>

    <NoteCard v-for="note in storeNotes.notes" :key="note.id" :note="note" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import NoteCard from "../components/Notes/NoteCard.vue";
import AddEditNote from "@/components/Notes/AddEditNote.vue";
import { useStoreNotes } from "@/stores/notes";
import { useWatchCharacters } from "@/use/useWatchCharacters.js";

const storeNotes = useStoreNotes();

const newNote = ref("");
const addEditNoteRef = ref(null);

const addNote = () => {
  storeNotes.addNote(newNote.value);

  newNote.value = "";
  addEditNoteRef.value.focusTextArea();
};

useWatchCharacters(newNote, 500);
</script>
