import { reactive } from 'vue'
import { LessonDtoView } from '@/shared/api'
// import { LessonDtoView } from '@/shared/api'

const lessonsTh: string[] = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
  'Посилання',
]
const lessonsFinishedTh: string[] = [
  'Дата заняття',
  'Кількість набраних годин',
  'Ментор',
  'Статус',
]

const lessonsTd = reactive<LessonDtoView[]>([])

export { lessonsTh, lessonsFinishedTh, lessonsTd }
