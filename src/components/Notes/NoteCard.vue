<template>
  <div class="card mb-4">
    <div class="card-content">
      <div class="content">
        {{ note.content }}
        <div class="has-text-right has-text-grey-light mt-2">
          <small> {{ characterLength }} </small>
        </div>
      </div>
    </div>
    <footer class="card-footer">
      <RouterLink
        :to="{ name: 'edit-note', params: { id: note.id } }"
        class="card-footer-item"
      >
        Edit
      </RouterLink>
      <a
        @click.prevent="modals.deleteNote = true"
        href="#"
        class="card-footer-item"
      >
        Delete
      </a>
    </footer>

    <DeleteNoteModal
      v-if="modals.deleteNote"
      v-model="modals.deleteNote"
      :note-id="note.id"
    />
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import DeleteNoteModal from "@/components/Notes/DeleteNoteModal.vue";

const props = defineProps({
  note: {
    type: Object,
    required: true,
  },
});

const characterLength = computed(() => {
  let length = props.note.content.length;

  let description = length > 1 ? "characters" : "character";

  return `${length} ${description}`;
});

// # MODALS

const modals = reactive({
  deleteNote: false,
});
</script>

<style scoped></style>
