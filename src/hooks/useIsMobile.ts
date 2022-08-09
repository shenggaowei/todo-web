import { onMounted, onUnmounted, ref } from "vue"
import { throttle } from "lodash"

function useIsMobile() {
    const isMobile = ref(true)
    const checkMobile = throttle(() => {
        const ua = navigator.userAgent.toLowerCase()
        const ret = /iphone|android|ucweb|ucbrowser|nokia|sony|ericsson|mot|samsung|sgh|lg|philips|panasonic|alcatel|lenovo|cldc|midp|wap|mobile/i.test(ua) && !/ipad/i.test(ua) || document.body.clientWidth <= 768
        isMobile.value = ret;
    }, 100)

    onMounted(() => {
        checkMobile()
        window.addEventListener('resize', checkMobile)
    })

    onUnmounted(() => {
        window.removeEventListener('resize', checkMobile)
    })

    return isMobile
}

export default useIsMobile