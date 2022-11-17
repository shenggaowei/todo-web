import { TOrigin } from "@/service/common/interface";
export interface ISignInParams {
  userName: string;
  password: string;
  phone?: number;
  origin: TOrigin;
}

export interface ISignInRes {
  token: string;
}

export interface ISignUpRes {
  token: string;
}

export interface ISignUpParams {
  userName: string;
  password: string;
  origin: TOrigin;
  captcha: string;
  uuid: string | null;
}

export interface ISignupRes {
  token: string;
}
