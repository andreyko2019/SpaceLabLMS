import { ref } from 'vue'
import { deleteStudent } from '@/features'

const currentPage = ref(0)
const pageSize = ref(4)
const totalPage = ref<number>(0)
const studentTh: string[] = [
  'ID',
  'П.І.Б',
  'Курс',
  'Дата приєднання ',
  'Рівень підготовки',
  'Завдання',
  'Статус',
  '',
]

const handleAction = (id: string, action: string) => {
  switch (action) {
    case 'edit':
      edit(id)
      break
    case 'delete':
      deletes(id)
      break
    case 'tasks':
      tasks(id)
      break
    default:
      console.log('Unknown action:', action)
  }
}

const edit = (id: string) => {
  console.log('Edit:', id)
}

const deletes = async (id: string) => {
  console.log('Delete:', id)
  await deleteStudent(id)
}

const tasks = (id: string) => {
  console.log('Task:', id)
}

const showPages = ['5', '10', '20', '30']

export { currentPage, pageSize, totalPage, studentTh, handleAction, showPages }
