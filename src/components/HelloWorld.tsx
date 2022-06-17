import { defineComponent } from "vue";

export interface ITodoList {
    getTodoList?: () => 0
}

export default defineComponent<ITodoList>(
    {
        name: 'HelloWorld',
        data() {
            return {} 
        },
        setup(props) {
            return {
                getTodoList: props.getTodoList
            }
        },
        render() {
            return <div onClick={this.getTodoList}>HelloWorld</div>
        }
    }
)