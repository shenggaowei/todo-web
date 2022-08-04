import { Button, ActionSheet ,Form, Field, CellGroup } from 'vant'
import { App } from 'vue'

const components = [
    Button,
    ActionSheet,
    Form,
    Field,
    CellGroup
]

export default (app: App) => {
    components.forEach(ele => app.use(ele))
}