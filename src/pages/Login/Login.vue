<template>
  <Layout>
    <div class="box">
      哈哈哈哈哈哈哈
    </div>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Layout from '@/components/layout/index.vue'

export default defineComponent({
  components: {
    Layout
  },
  setup(props) {
    const formData = ref<{ phone: string; password: string}>()
    return {
      formData
    }
  }
});
</script>

<style lang="scss" scoped>
.box {
  width: 375px;
  height: 100px;
  background: orange;
  font-size: 18px;
  color: purple;
}
</style>