import { onBeforeRouteLeave, useRoute, useRouter } from "vue-router";
import { getAccountInfo } from "@/utils";

function useNavigationGuards() {
  const route = useRoute();
  const router = useRouter();
  const accountInfo = getAccountInfo<{ token: string }>() || {};
  const currentRouter = route.matched[0];
  const { login: needLogin } = currentRouter.props?.default as any;
  const isLogin = !!accountInfo.token;
  const isNotFoundRoute = !currentRouter.name;

  if (isLogin) {
    if (route.name === "login") {
      router.push("/home");
    }
  } else {
    if (needLogin) {
      router.push("/login");
    }
  }

  if (isNotFoundRoute) {
    router.push("/not-found");
  }

  onBeforeRouteLeave(async (to, from) => {
    const { login: needLogin } = to.matched[0]?.props?.default || ({} as any);
    const isNotFoundRoute = !to.name;
    const accountInfo = getAccountInfo<{ token: string }>() || {};
    const isLogin = !!accountInfo.token;

    if (isLogin) {
      if (to.name === "login") {
        return { name: "home" };
      }
    } else {
      if (needLogin) {
        return { name: "login" };
      }
    }

    if (isNotFoundRoute) {
      return { name: "not-found" };
    }

    return true;
  });
}

export default useNavigationGuards;
