<template>
  <Layout :class="$style.layout">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="userInfo.userName"
          name="username"
          label="用户名"
          placeholder="请输入用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          name="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          :disabled="isLoading"
        >
          提交
        </van-button>
      </div>
    </van-form>
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import Layout from "@/components/layout/index.vue";
import { setStorage } from "@/utils/storage";
import { useSignIn } from "./useService";

export default defineComponent({
  components: {
    Layout,
  },
  setup() {
    const router = useRouter();
    const userInfo = ref<{ userName: string; password: string }>({
      userName: "",
      password: "",
    });
    const { execute, isLoading } = useSignIn(userInfo.value);
    const onSubmit = async () => {
      const data = await execute();
      if (data.token) {
        setStorage("account", data);
        router.push("/home");
      }
    };
    return {
      userInfo,
      onSubmit,
      isLoading,
    };
  },
});
</script>

<style lang="scss" module>
.layout {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>