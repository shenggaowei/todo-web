import { account_key } from "@/utils/storage";
import { getStorage } from "@/utils/storage";

// 获取用户登录信息
export function getAccountInfo<T = any>(): T {
    return getStorage(account_key) as T
}