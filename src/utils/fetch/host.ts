import { isProd } from "@/utils";

export const development = "//localhost:7001";
export const production = "//api.weishenggao.com";

export function getHost() {
  return {
    host: isProd ? production : development,
  };
}
