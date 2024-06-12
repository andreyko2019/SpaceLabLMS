import { onMounted, onUnmounted } from 'vue'

export function useResize(callback: () => void): void {
  onMounted(() => {
    window.addEventListener('resize', callback)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', callback)
  })
}
