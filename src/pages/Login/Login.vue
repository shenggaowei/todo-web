<template>
  <div class="login-container">
   hah 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup(props) {
    const formData = ref<{ phone: string; password: string}>()
    return {
      formData
    }
  }
});
</script>