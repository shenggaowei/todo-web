import { ref, reactive } from 'vue'

const useModal = <T = any>() => {
    const visible = ref<Boolean>(false)
    const currentItem = ref<T>()

    const open = (item: T) => {
        visible.value = true
        if (item) {
            currentItem.value = item
        }
    }

    const close = () => {
        visible.value = false
        currentItem.value = undefined
    }

    return reactive({
        visible,
        open,
        close,
        currentItem
    })
}

export default useModal
