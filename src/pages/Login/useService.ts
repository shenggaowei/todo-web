import { useRequest } from "vue-request";
import { signIn } from "@/service/auth";

export function useSignIn() {
  const { run, data, loading } = useRequest(signIn, {
    manual: true,
  });

  return {
    run,
    data,
    loading,
  };
}
