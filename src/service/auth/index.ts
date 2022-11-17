import * as Fetch from "@/utils/fetch";
import * as api from "../api";
import type {
  ISignInParams,
  ISignInRes,
  ISignUpParams,
  ISignUpRes,
} from "./interface";

// 登录
export async function signIn(params: ISignInParams) {
  return Fetch.POST<ISignInRes, ISignInParams>(api.signIn, params);
}

// 注册
export async function signUp(params: ISignUpParams) {
  return Fetch.POST<ISignUpRes, ISignUpParams>(api.signUp, params);
}
