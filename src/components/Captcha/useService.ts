import { useRequest } from "vue-request";
import { getCaptcha } from "@/service/common";

export function useGetCaptcha() {
  const { run, data, loading } = useRequest(getCaptcha, {
    manual: true,
  });

  return {
    run,
    data,
    loading,
  };
}
