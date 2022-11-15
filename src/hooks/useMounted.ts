import { ref, onMounted, Ref } from "vue";

export default function useMounted(): Ref<boolean> {
  const isMounted = ref<boolean>(false);
  onMounted(() => {
    isMounted.value = true;
  });
  return isMounted;
}
