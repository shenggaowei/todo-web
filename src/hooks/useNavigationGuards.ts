import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { getAccountInfo } from '@/utils'

function useNavigationGuards() {
    const route = useRoute()
    const router = useRouter()
    const accountInfo = getAccountInfo<{ token: string }>()
    const { login: needLogin } = route.matched[0].props?.default as any

    if (route.name === 'login') {
        if (accountInfo?.token) {
            router.push('/home')
        }
        return
    }

    if (!accountInfo?.token && needLogin) {
        router.push('/login');
        return
    }

    onBeforeRouteLeave(async (to, from) => {
        const { login: needLogin } = to.matched[0]?.props?.default as any

        if (to.name === 'Login') {
            if (accountInfo.token) {
                return { name: 'home' }
            }
        }

        if (to)
            if (!accountInfo?.token && needLogin) {
                return { name: 'login' }
            }
    }
    )
}

export default useNavigationGuards