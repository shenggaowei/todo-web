<template>
  <Layout :class="$style.layout">
    <van-empty image="search" description="呀，页面逃跑了" />
  </Layout>
</template>
<script lang="ts">
import Layout from "@/components/layout/index.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    Layout,
  },
  setup() {},
});
</script>

<style lang="scss" module>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
