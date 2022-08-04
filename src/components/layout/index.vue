<template>
  <div :class="[$style.layout, customClass]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup(props, context) {
    const { class: customClass } = context.attrs
    return {
      customClass
    }
  },
})
</script>

<style lang="scss" module>
.layout {
  margin: 0 auto;
  overflow: hidden;
  width: 100vw;
}
</style>
