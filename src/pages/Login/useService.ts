import { useAsyncState } from "@vueuse/core";
import { signIn } from "@/service/auth";
import type { ISignInParams  } from '@/service/auth/interface'

type TUseSignInParams = Pick<ISignInParams, 'password' | 'userName'>

export function useSignIn(params: TUseSignInParams) {
    const { state, execute, isLoading } = useAsyncState(() => {
      return signIn({
          ...params,
          origin: 'pc'
      })
    },
    {
        token: ''
        },
        {
        immediate: false
    })
    return {
        state,
        execute,
        isLoading
    }
}