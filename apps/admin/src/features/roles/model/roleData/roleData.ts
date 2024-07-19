import { ref } from 'vue'

export function roleData() {
  const isModalAdd = ref(false)

  const roleNameInp = [
    { label: 'Назва Англійською', name: 'eng-name' },
    { label: 'Назва Українською', name: 'ua-name' },
    { label: 'Назва Російською', name: 'ru-name' },
  ]

  return { isModalAdd, roleNameInp }
}
