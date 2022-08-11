import { isProd } from "@/utils"

export const development = '//localhost:7001'
export const production = '//api.shenggao.tech'

export function getHost() {
    return {
        host: isProd ? production : development
    }
}
