<template>
  <svg
    :class="[$style.default_icon, props.wrapper_class]"
    class="icon"
    aria-hidden="true"
    color="red"
  >
    <use :xlink:href="iconType"></use>
  </svg>
</template>

<script lang="ts" setup>
import { computed } from "vue";

interface IIcon {
  type: string;
  wrapper_class?: string;
}

const props = defineProps<IIcon>();

const iconType = computed(() => {
  return `#icon-${props.type}`;
});
</script>

<style lang="scss" module>
.default_icon {
  width: 24px;
  height: 24px;
}
</style>
