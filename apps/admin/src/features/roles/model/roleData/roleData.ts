import { Ref, ref } from 'vue'
import { Add2PagesEnum } from '@/shared'

export function roleData() {
  const isModalAdd = ref(false)

  const roleNameInp = [
    { label: 'Назва Англійською', name: 'add_name' },
    { label: 'Назва Українською', name: 'add_name_ukr' },
    { label: 'Назва Англійською', name: 'add_name_eng' },
  ]

  const rolePages = ref<string[]>([])

  const selectedRolePages: Ref<Add2PagesEnum[]> = ref([])

  return { isModalAdd, roleNameInp, rolePages, selectedRolePages }
}
