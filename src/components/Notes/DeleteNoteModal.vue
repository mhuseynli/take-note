<template>
  <div class="modal is-active px-3">
    <div class="modal-background"></div>
    <div ref="modalCardRef" class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">Delete Note? ❌</p>
        <button @click="closeModal" class="delete" aria-label="close"></button>
      </header>
      <section class="modal-card-body">
        Do you really want to delete this note?
      </section>
      <footer class="modal-card-foot is-justify-content-end">
        <button @click="closeModal" class="button">Cancel</button>
        <button
          @click="storeNotes.deleteNote(noteId)"
          class="button is-danger"
        >
          Delete
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref } from "vue";
import { useStoreNotes } from "@/stores/notes";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  noteId: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const closeModal = () => {
  emit("update:modelValue", false);
};

const storeNotes = useStoreNotes();

const modalCardRef = ref(null);

onClickOutside(modalCardRef, closeModal);

const handleKeyboard = (e) => {
  if (e.key === "Escape") {
    closeModal();
  }
};
onMounted(() => {
  document.addEventListener("keyup", handleKeyboard);
});
onUnmounted(() => {
  document.removeEventListener("keyup", handleKeyboard);
});
</script>
