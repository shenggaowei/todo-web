import { Button } from 'vant'
import { App } from 'vue'

const components = [
    Button
]

export default (app: App) => {
    components.forEach(ele => app.use(ele))
}