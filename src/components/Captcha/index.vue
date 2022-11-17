<template>
  <div v-html="captcha" :class="[props.customClass]" @click="handleClick"></div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import { getUuid } from "@/utils";
import { useGetCaptcha } from "./useService";

interface ICaptchaProps {
  customClass?: string;
}

interface ICaptchaEmits {
  (e: "getUuid", value: string | null): void;
}

const props = defineProps<ICaptchaProps>();

const emit = defineEmits<ICaptchaEmits>();

const captcha = ref<string | null>();
const getCaptchaHandler = useGetCaptcha();

async function getCaptcha() {
  const uuid = getUuid();
  const data = await getCaptchaHandler.run({ uuid });
  emit("getUuid", uuid);
  return data;
}

async function handleClick() {
  const data = await getCaptcha();
  captcha.value = data;
}

onMounted(async () => {
  const data = await getCaptcha();
  captcha.value = data;
  emit("getUuid", data);
});
</script>

<style lang="scss" module></style>
