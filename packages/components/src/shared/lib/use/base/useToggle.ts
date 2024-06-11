import { Ref } from 'vue'

export function useToggle(nameVariable: Ref<boolean>): void {
  nameVariable.value = !nameVariable.value
}
