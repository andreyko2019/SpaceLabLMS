import { ref } from 'vue'
interface ProcessedContactDto {
  name: string
  email: string
  telegram: string
  telephone: string
  icon: string
}
export function contactData() {
  const inpData = [
    { label: "Ім'я", name: 'name' },
    { label: 'По батькові', name: 'middlename' },
    { label: 'Прізвище', name: 'lastname' },
    { label: 'Моб. телефон', name: 'telephone' },
    { label: 'Telegram', name: 'telegram' },
    { label: 'Email', name: 'email' },
  ]

  const inpDataEdit = [
    { label: 'Id', name: 'id' },
    { label: "Ім'я", name: 'name' },
    { label: 'По батькові', name: 'middlename' },
    { label: 'Прізвище', name: 'lastname' },
    { label: 'Моб. телефон', name: 'telephone' },
    { label: 'Telegram', name: 'telegram' },
    { label: 'Email', name: 'email' },
    { label: 'Display', name: 'display' },
  ]

  const thData: string[] = ['ФІО', 'Моб. телефон', 'Telegram', 'Email', '']

  const isName = ref('')
  const isModalAdd = ref(false)
  const isModalEdit = ref(false)
  const page = ref(0)
  const pageSize = ref(4)
  const totalPage = ref<number>(0)
  const isLoading = ref(false)
  const tdData = ref<ProcessedContactDto[]>([])

  return {
    inpData,
    thData,
    isModalAdd,
    page,
    pageSize,
    totalPage,
    isLoading,
    tdData,
    isName,
    isModalEdit,
    inpDataEdit,
  }
}

// export
