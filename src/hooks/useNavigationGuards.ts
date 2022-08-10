import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router'
import { getAccountInfo } from '@/utils'

function useNavigationGuards() {
    debugger
    const route = useRoute()
    const router = useRouter()
    const accountInfo = getAccountInfo<{ token: string }>() || {}
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

        if (accountInfo.token) {
            if (to.name === 'login') {
                return { name: 'home' }
            } else {
                return { name: to.name }
            }
        } else {
            if (needLogin) {
                return { name: 'login' }
            } else {
                return { name: to.name }
            }
        }
    })
}

export default useNavigationGuards