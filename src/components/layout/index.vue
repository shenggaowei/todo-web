<template>
<div class="layout">
  <slot></slot>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
  },
})
</script>

<style lang="scss" scoped>
.layout {
    width: 100vw;
    height: 100vh;
}
</style>
