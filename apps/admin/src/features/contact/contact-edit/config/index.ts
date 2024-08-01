import { ref } from 'vue'

const editContactLinks = [
  { href: '/contact', name: 'Контакти', icon: 'arrow-link' },
  { href: '/contact-edit', name: 'Редагувати контакт', icon: '' },
]

const editContactInp = [
  { label: "Ім'я", name: 'name' },
  { label: 'По батькові', name: 'middlename' },
  { label: 'Прізвище', name: 'lastname' },
  { label: 'Моб. телефон', name: 'telephone' },
  { label: 'Telegram', name: 'telegram' },
  { label: 'Email', name: 'email' },
]

const isDisplay = ref(false)

export { editContactLinks, editContactInp, isDisplay }
