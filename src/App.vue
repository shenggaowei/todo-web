<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import useViewPort from '@/hooks/useViewPort' 

export default defineComponent({
  setup() {
    useViewPort()
  },
})
</script>
