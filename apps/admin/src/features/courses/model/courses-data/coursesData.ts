import { ref } from 'vue'

export function coursesData() {
  const links = [
    { href: '/course', name: 'Курси' },
    { href: '/course/card', name: 'Карточка курсу' },
  ]

  const isModalAdd = ref(false)

  return { links, isModalAdd }
}
