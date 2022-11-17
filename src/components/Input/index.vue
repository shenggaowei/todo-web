<template>
  <div
    :class="[
      $style.input_box,
      inputHandler.inputActive && $style.input_active,
      isShowError && $style.input_error,
      props.wrapperClass,
    ]"
  >
    <custom-icon
      :type="
        inputHandler.inputActive
          ? `${props.icon + '-active'}`
          : `${props.icon + '-normal'}`
      "
    />
    <van-field
      :model-value="props.modelValue"
      @change="onChange"
      :name="props.name"
      :maxlength="props.maxlength"
      :class="$style.input"
      :placeholder="props.placeholder"
      :rules="props.rules ? [props.rules] : undefined"
      @focus="inputHandler.inputFocus"
      @blur="onBlur"
    />
    <span :class="$style.error_message" v-if="isShowError">{{
      props?.rules?.message
    }}</span>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from "vue";
import CustomIcon from "@/components/Icon/index.vue";
import useInputStatus from "./hooks/useInputStatus";

type TRules = {
  required: boolean;
  message: string;
};

interface IInputProps {
  name: string;
  modelValue: string | number;
  rules?: TRules;
  icon: string;
  placeholder: string;
  emitError?: boolean;
  wrapperClass?: string;
  maxlength?: number;
}

//需要注意 defineEmit 中函数的定义方法
interface IInputEmits {
  (e: "update:modelValue", value: any): void;
}

const props = defineProps<IInputProps>();
const emit = defineEmits<IInputEmits>();
const inputHandler = useInputStatus();

const emitError = ref(props.emitError);

const onChange = (event: Event) => {
  const value = (event.target as HTMLInputElement).value;
  emit("update:modelValue", value);
};

const onBlur = (event: Event) => {
  inputHandler.inputBlur();
  emitError.value = true;
};

const isShowError = computed(() => {
  return props?.rules?.required && emitError.value && !props.modelValue;
});

watch(
  () => props.emitError,
  (value, oldValue) => {
    if (oldValue !== value) {
      emitError.value = value;
    }
  }
);
</script>

<style lang="scss" module>
.input_box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #f0f0f0;
}

.icon_box {
  position: absolute;
  z-index: 1;
}

.input_active {
  border-bottom: 1px solid #88b46f;
}

.input_error {
  border-bottom: 1px solid #ff3180;
}

.input {
  margin: 0;
  padding-left: 16px;
}

.error_message {
  position: absolute;
  bottom: -24px;
  right: 6px;
  z-index: 2;
  font-size: 10px;
  font-weight: 400;
  color: #ff3180;
}
</style>
