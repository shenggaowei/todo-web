<template>
  <div>{{ count }}</div>
</template>
<script lang="ts" >
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup(props, { expose }) {
    const count = ref(0);
    const increment = () => ++count.value;

    expose({
      increment,
    });

    return {
      count,
    };
  },
});
</script>