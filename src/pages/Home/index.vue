<template>
  <Layout> 我是首页哈 {{ data }} </Layout>
  <van-button type="primary" @click="decrement">点我-</van-button>
  <span>{{ data }}</span>
  <van-button type="primary" @click="increment">点我+</van-button>
  <panel ref="panel_value" />
</template>

<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import Layout from "@/components/layout/index.vue";
import Panel from "./panel.vue";

const data = ref<number>(0);
const panel_value = ref();

const increment = () => {
  panel_value.value.increment();
};

const decrement = () => {
  data.value--;
};

watchEffect(() => {
  console.log(data.value);
});
</script>
