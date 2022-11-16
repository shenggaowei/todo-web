import { account_key } from "@/utils/storage";
import { getStorage } from "@/utils/storage";
import { v4 as uuidv4 } from "uuid";

// 获取用户登录信息
export function getAccountInfo<T = any>(): T {
  return getStorage(account_key) as T;
}

export const isProd = process.env.NODE_ENV === "production";

export const getUuid = () => uuidv4();
