export interface ISignInParams {
  userName: string;
  password: string;
  phone?: number;
  origin: "pc" | "mini-app";
}

export interface ISignInRes {
  token: string;
}

export interface ISignUpParams {
  userName: string;
  password: string;
  phone?: number;
  origin: "pc" | "mini-app";
}

export interface ISignUpRes {
  token: string;
}
