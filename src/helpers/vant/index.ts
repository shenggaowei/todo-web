import { Button, ActionSheet } from 'vant'
import { App } from 'vue'

const components = [
    Button,
    ActionSheet
]

export default (app: App) => {
    components.forEach(ele => app.use(ele))
}