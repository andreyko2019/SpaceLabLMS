import { ref } from 'vue'

const page = ref(0)
const pageSize = ref(4)
const totalPage = ref<number>(0)
const isModal = ref(false)
const studentTh: string[] = [
  'П.І.Б',
  'Курс',
  'Дата приєднання ',
  'Рівень підготовки',
  'Завдання',
  'Статус',
]

export { page, pageSize, totalPage, studentTh, isModal }
