<template>
  <div class="stats">
    <table class="table is-fullwidth has-shadow is-bordered is-rounded">
      <thead>
        <tr>
          <th>Stat</th>
          <th>Value</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Number of Notes</td>
          <td>{{ storeNotes.totalNotesCount }}</td>
        </tr>
        <tr>
          <td>Number of characters (of all notes)</td>
          <td>{{ storeNotes.totalCharCount }}</td>
        </tr>
      </tbody>
    </table>

    <input
      v-model="loveTakeNote"
      class="input"
      type="text"
      placeholder="Do you love 'Take Note' ?"
      v-autofocus
    />
  </div>
</template>

<script setup>
import { useStoreNotes } from "@/stores/notes";
import { vAutofocus } from "@/directives/vAutofocus";
import { useWatchCharacters } from "@/use/useWatchCharacters";
import { ref } from "vue";

const storeNotes = useStoreNotes();

const loveTakeNote = ref("");
useWatchCharacters(loveTakeNote, 5);
</script>
