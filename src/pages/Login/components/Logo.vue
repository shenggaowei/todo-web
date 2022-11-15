<template>
  <img :class="$style.logoImg" :src="logo" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import logo from "@/assets/img/logo.jpg";

export default defineComponent({
  setup(props, context) {
    return {
      logo,
    };
  },
});
</script>

<style lang="scss" module>
.logoImg {
  display: block;
  border-radius: 6px;
  width: 105px;
}
</style>
