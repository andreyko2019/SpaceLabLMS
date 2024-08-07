import { ref } from 'vue'

interface Page {
  href: string
  icon: string
  name: string
}

export const pages = ref<Page[]>([])
