import * as Fetch from "@/utils/fetch";
import * as api from "../api";
import type { IGetCaptchaParams } from "./interface";

export async function getCaptcha(params: IGetCaptchaParams) {
  return Fetch.GET<string, IGetCaptchaParams>(api.getCaptcha, params);
}
