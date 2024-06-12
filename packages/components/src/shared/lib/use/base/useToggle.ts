import { Ref } from 'vue'

export function useToggle(nameVariable: Ref<boolean>) {
  return () => {
    nameVariable.value = !nameVariable.value
  }
}
