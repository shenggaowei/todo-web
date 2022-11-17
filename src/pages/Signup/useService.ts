import { useRequest } from "vue-request";
import { signUp } from "@/service/auth";

export function useSignUp() {
  const { run, data, loading } = useRequest(signUp, {
    manual: true,
  });

  return {
    run,
    data,
    loading,
  };
}
