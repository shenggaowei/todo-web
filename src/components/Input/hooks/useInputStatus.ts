import { ref, reactive } from "vue";

export default function useInputStatus() {
  const inputActive = ref<boolean>(false);
  const inputFocus = () => {
    inputActive.value = true;
  };
  const inputBlur = () => {
    inputActive.value = false;
  };
  return reactive({
    inputActive,
    inputFocus,
    inputBlur,
  });
}
