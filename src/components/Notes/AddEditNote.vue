<template>
  <div
    class="p-4 mb-5 add-edit-notebox"
    :class="`has-background-${bgColor}-dark`"
  >
    <label v-if="label" class="label has-text-white">{{ label }}</label>
    <div class="field">
      <div class="control">
        <textarea
          maxlength="500"
          v-model="modelValue"
          @input="$emit('update:modelValue', modelValue)"
          ref="textareaRef"
          class="textarea"
          :placeholder="placeholder"
          v-autofocus
        ></textarea>
      </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons"> </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});

const emit = defineEmits(["update:modelValue"]);

const textareaRef = ref(null);
const focusTextArea = () => {
  textareaRef.value.focus();
};

defineExpose({
  focusTextArea,
});
</script>

<style scoped>
.add-edit-notebox {
  border-radius: 6px;
}
</style>
