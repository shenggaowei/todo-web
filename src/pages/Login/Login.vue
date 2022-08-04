<template>
  <Layout>
    <div class="box">
       <van-button class="$style['button']" size="small" type="primary">发送验证码</van-button>
       <van-cell is-link title="基础用法" @click="show= true" />
       <van-action-sheet v-model:show="show" :actions="actions" @select="onSelect" />
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
    const show = ref<boolean>(false)
    const actions = [
      { name: '选项一' },
      { name: '选项二' },
      { name: '选项三' },
    ];
    const onSelect = () => {
      show.value = false;
    };
    return {
      formData,
      show,
      onSelect,
      actions
    }
  }
});
</script>

<style lang="scss" module>
.box {
  width: 375px;
  height: 100px;
  background: orange;
  font-size: 18px;
  color: purple;
}

button {
}
</style>