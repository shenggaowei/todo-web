import { onUnmounted } from 'vue'
import { initViewport } from '@/utils';

export default function useViewPort() {
  initViewport();
  window.addEventListener('resize', initViewport)
  onUnmounted(() => {
    window.removeEventListener('resize', initViewport)
  })
}