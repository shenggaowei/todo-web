import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { getAccountInfo } from '@/utils'

function useNavigationGuards() {
    const route = useRoute()
    const router = useRouter()
    const accountInfo = getAccountInfo<{ token: string }>()
    const currentRouter = route.matched[0]
    const { login: needLogin } = currentRouter.props?.default as any

    if (!currentRouter.name) {
        return router.push('/not-found')
    }

    if (route.name === 'login') {
        if (accountInfo?.token) {
            router.push('/home')
        }
        return
    }

    if (!accountInfo?.token && needLogin) {
        return router.push('/login');
    }

    onBeforeRouteLeave(async (to, from) => {
        const { login: needLogin } = to.matched[0]?.props?.default || {} as any

        if (!to.name) {
            return { name: "not-found" }
        }

        if (to.name === 'Login') {
            if (accountInfo.token) {
                return { name: 'home' }
            }
        }

        if (!accountInfo?.token && needLogin) {
            return { name: 'login' }
        }
    })
}

export default useNavigationGuards