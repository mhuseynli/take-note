import { watch } from "vue";

export function useWatchCharacters(val, maxChars = 100) {
  watch(val, (newVal) => {
    if (newVal.length === maxChars) {
      alert(`Only ${maxChars} characters allowed.`);
    }
  });
}
