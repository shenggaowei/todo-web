import { Button, ActionSheet, Form, Field, CellGroup, Dialog, Calendar, Empty } from 'vant'
import { App } from 'vue'

const components = [
    Button,
    ActionSheet,
    Form,
    Field,
    CellGroup,
    Dialog,
    Calendar,
    Empty
]

export default (app: App) => {
    components.forEach(ele => app.use(ele))
}