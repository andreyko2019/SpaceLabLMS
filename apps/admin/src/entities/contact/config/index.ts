import { ref } from 'vue'
import { IContact } from '@/entities'

const contactCurrentPage = ref(0)
const contactTotalPage = ref(0)
const contactId = ref(0)
const contactTd = ref<IContact[]>([])

const contactTh = ref<string[]>([
  'ID',
  'П.І.Б',
  'Моб. телефон',
  'Telegram',
  'Email',
  '',
])

export { contactTh, contactTd, contactCurrentPage, contactTotalPage, contactId }
