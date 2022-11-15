<template>
  <div :class="[$style.layout, customClass]">
    <div :class="[$style.content]">
      <slot v-if="isMobile"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, watchEffect } from "vue";
import { Dialog } from "vant";
import "vant/es/dialog/style";
import useIsMobile from "@/hooks/useIsMobile";
import useNavigationGuards from "@/hooks/useNavigationGuards";

export default defineComponent({
  setup(props, context) {
    const { class: customClass } = context.attrs;
    useNavigationGuards();
    const isMobile = useIsMobile();
    const stopWatch = watchEffect(() => {
      if (!isMobile.value) {
        Dialog({ message: "pc端正在开发中，先用手机打开看看" });
      }
    });
    onUnmounted(() => {
      stopWatch();
    });
    return {
      customClass,
      isMobile,
    };
  },
});
</script>

<style lang="scss" module>
.layout {
  box-sizing: border-box;
  width: 100%;
  padding: 16px;
  background: #f9f9f9;
}

.content {
  width: 100%;
  background: #fff;
}
</style>
