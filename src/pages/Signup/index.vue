<template>
  <Layout :wrapper-class="$style.layout" :content-class="$style.content">
    <div :class="$style.logo_box">
      <logo />
    </div>
    <van-form :class="$style.form" :show-error-message="false" ref="formRef">
      <van-cell-group inset :class="$style.custom_group">
        <div :class="$style.input_user">
          <custom-input
            icon="user"
            placeholder="用户名"
            :rules="{ required: true, message: '请填写用户名' }"
            name="userName"
            v-model="userInfo.userName"
            :emit-error="emitError"
          />
        </div>
        <div :class="$style.input_password">
          <custom-input
            icon="password"
            placeholder="密码"
            :rules="{ required: true, message: '请填写密码' }"
            name="password"
            v-model="userInfo.password"
            :emit-error="emitError"
          />
        </div>
        <div :class="$style.input_captcha">
          <custom-input
            icon="captcha"
            placeholder="验证码"
            :rules="{ required: true, message: '请填写验证码' }"
            name="captcha"
            v-model="userInfo.captcha"
            :emit-error="emitError"
            :maxlength="4"
          />
          <captcha :class="$style.captcha_wrapper" @get-uuid="getUuid" />
        </div>
      </van-cell-group>
      <div :class="$style.submit_button_box">
        <van-button
          :class="$style.submit_button"
          round
          block
          type="primary"
          @click="onSubmit"
          :disabled="loading"
        >
          注册
        </van-button>
      </div>
    </van-form>
  </Layout>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Layout from "@/components/layout/index.vue";
import Captcha from "@/components/Captcha/index.vue";
import Logo from "@/components/Logo/index.vue";
import { setStorage, account_key } from "@/utils/storage";
import CustomInput from "@/components/Input/index.vue";
import { ISignUpParams } from "@/service/auth/interface";
import { useSignUp } from "./useService";
import { FormInstance } from "vant";
import { useRouter } from "vue-router";

const router = useRouter();
const userInfo = ref<Omit<ISignUpParams, "origin" | "uuid">>({
  userName: "",
  password: "",
  captcha: "",
});

const uuid = ref<string | null>();

const emitError = ref<boolean>(false);

const formRef = ref<FormInstance>();

const { loading, run } = useSignUp();

const getUuid = (value: string | null) => {
  uuid.value = value;
};

const onSubmit = async () => {
  try {
    await formRef.value?.validate();
  } catch (error) {
    emitError.value = true;
    return;
  }
  if (!uuid.value) {
    return;
  }
  const data = await run({
    ...userInfo.value,
    origin: "pc",
    uuid: uuid.value,
  });
  if (data?.token) {
    setStorage(account_key, data);
    router.push("/home");
  }
};
</script>

<style lang="scss" module>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 134px;
}

.content {
  padding-bottom: 14px;
  border-radius: 8px;
}

.form {
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #f3f3f3;
  margin: 0 6px;
  margin-bottom: 30px;
  padding: 40px 44px 26px 40px;
  background: #fff;
}

.input_user {
  margin-bottom: 26px;
}

.input_password {
  margin-bottom: 36px;
}

.submit_button {
  border-radius: 2px;
  margin-bottom: 14px;
}

.custom_group {
  margin: 0;
}

.input_captcha {
  margin-bottom: 36px;
  position: relative;
}

.captcha_wrapper {
  position: absolute;
  right: 0;
  top: 0;
  width: 130px;
  height: 30px;
}
</style>
