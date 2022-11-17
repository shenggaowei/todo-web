<template>
  <Layout :wrapper-class="$style.layout" :content-class="$style.content">
    <div :class="$style.logo_box">
      <Logo />
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
      </van-cell-group>
      <van-button
        :class="$style.submit_button"
        round
        block
        type="primary"
        @click="onSubmit"
        :disabled="loading"
      >
        登录
      </van-button>
      <div :class="$style.signup_button_box">
        <span @click="handleClickFindPassword">忘记密码</span>
        <span @click="handleClickSignup">注册</span>
      </div>
    </van-form>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { setStorage, account_key } from "@/utils/storage";
import { useSignIn } from "./useService";
import Layout from "@/components/layout/index.vue";
import Logo from "./components/Logo.vue";
import Icon from "@/components/Icon/index.vue";
import CustomInput from "@/components/Input/index.vue";
import { FormInstance } from "vant";

export default defineComponent({
  components: {
    Layout,
    Logo,
    Icon,
    CustomInput,
  },
  setup() {
    const router = useRouter();
    const userInfo = ref<{ userName: string; password: string }>({
      userName: "",
      password: "",
    });
    const formRef = ref<FormInstance>();
    const { run, loading } = useSignIn();
    const emitError = ref<boolean>(false);
    const onSubmit = async (event: MouseEvent) => {
      try {
        await formRef.value?.validate();
      } catch (error) {
        emitError.value = true;
        return;
      }
      const data = await run({
        ...userInfo.value,
        origin: "pc",
      });
      if (data?.token) {
        setStorage(account_key, data);
        router.push("/home");
      }
    };

    const handleClickFindPassword = () => {
      alert("找回密码");
    };
    const handleClickSignup = () => {
      router.push("/Signup");
    };
    return {
      userInfo,
      onSubmit,
      loading,
      formRef,
      emitError,
      handleClickFindPassword,
      handleClickSignup,
    };
  },
});
</script>

<style lang="scss" module>
.layout {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.content {
  padding-bottom: 14px;
  border-radius: 8px;
}

.logo_box {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 134px;
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

.custom_group {
  margin: 0;
}

.input {
  margin: 0;
}

.input_box {
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f0f0f0;
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

.signup_button_box {
  display: flex;
  justify-content: space-between;

  span {
    font-size: 12px;
    color: #5d7df3;
  }
}
</style>
