import { defineStore } from 'pinia'
import { computed, Ref, ref } from 'vue'
import { PersonalAreaControllerApiChangeThemeRequest } from '@spacelablms/student/src/shared/api'

export const useThemeStore = defineStore('theme', () => {
  const isTheme: Ref<PersonalAreaControllerApiChangeThemeRequest> = ref({
    theme: false,
  })
  const test = computed(() => isTheme.value.theme)

  function toggleTheme() {
    isTheme.value.theme = !isTheme.value.theme
  }

  return { isTheme, test, toggleTheme }
})
