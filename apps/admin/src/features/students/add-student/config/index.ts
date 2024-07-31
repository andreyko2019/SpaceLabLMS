import { ref } from 'vue'
import {
  getCurrentSituations,
  getEnglishLevels,
  getPreparationLevels,
  getStudentStatuses,
} from '@/shared'
import { DropDownItem, SelectedValues, StudentInput } from '@/entities'

const studentInp = ref<StudentInput[]>([
  { label: "Ім'я", name: 'name', type: 'text' },
  { label: 'По батькові', name: 'middlename', type: 'text' },
  { label: 'Прізвище', name: 'lastname', type: 'text' },
  { label: 'Дата народження', name: 'birthday', type: 'text' },
  { label: 'Телефон', name: 'telephone', type: 'tel' },
  { label: 'Email', name: 'email', type: 'email' },
  { label: 'Telegram', name: 'telegram', type: 'text' },
  { label: 'Загальна оцінка', name: 'totalmark', type: 'text' },
])

const dropDown = ref<DropDownItem[]>([
  {
    label: 'Поточне становище',
    option: await getCurrentSituations(),
    select: 'currentSituations',
  },
  {
    label: 'Рівень англійської',
    option: await getEnglishLevels(),
    select: 'englishLevels',
  },
  {
    label: 'Статус',
    option: await getStudentStatuses(),
    select: 'studentStatuses',
  },
  {
    label: 'Рівень підготовки',
    option: await getPreparationLevels(),
    select: 'preparationLevels',
  },
])
const selectedValues = ref<SelectedValues>({
  'currentSituations': undefined,
  'englishLevels': undefined,
  'studentStatuses': undefined,
  'preparationLevels': undefined,
})

const links = ref([
  { href: '/student', name: 'Студенти', icon: 'arrow-link' },
  { href: '/student-add', name: 'Додати студента', icon: '' },
])

export { studentInp, dropDown, selectedValues, links }
