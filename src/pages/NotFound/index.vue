<template>
  <Layout :class="$style.layout">
    <van-empty image="search" description="呀，页面逃跑了">
      <van-button @click="toHome" round type="primary" class="bottom-button">
        去寻找
      </van-button>
    </van-empty>
  </Layout>
</template>
<script lang="ts">
import Layout from "@/components/layout/index.vue";
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    Layout,
  },
  setup() {
    const router = useRouter();
    const toHome = () => {
      router.push("/home");
    };
    return {
      toHome,
    };
  },
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
