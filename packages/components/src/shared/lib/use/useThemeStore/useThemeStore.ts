// import { defineStore } from 'pinia'
// import { computed, Ref, ref } from 'vue'
// import { PersonalAreaControllerApiChangeThemeRequest } from '@spacelablms/student/src/shared/api'

// export const useThemeStore = defineStore('theme', () => {
//   const isTheme: Ref<PersonalAreaControllerApiChangeThemeRequest> = ref({
//     theme: false,
//   })
//   const test = computed(() => isTheme.value.theme)
//
//   function toggleTheme() {
//     isTheme.value.theme = !isTheme.value.theme
//   }
//
//   return { isTheme, test, toggleTheme }
// })

import { defineStore } from 'pinia'

export const stateVideo = defineStore({
  id: 'stateVideo',
  state: () => ({
    video: null as File | null,
    preview: null as File | string | null,
    stateVideo: null as Boolean | null,
  }),
})
