import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const state = ref(false)

  function checkTheme() {
    state.value = !state.value
  }

  return { state, checkTheme }
})
