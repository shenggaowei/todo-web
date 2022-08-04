import * as Fetch from '@/utils/fetch'
import * as api from '../api'
import type { ISignInParams, ISignInRes } from './interface'

export async function signIn(params: ISignInParams) {
  return Fetch.POST<ISignInRes, ISignInParams>(api.signIn, params)
}