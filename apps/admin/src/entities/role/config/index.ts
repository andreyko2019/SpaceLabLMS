import { ref } from 'vue'
import { RoleDtoView } from '@/shared'

const rolesTh = ref(['ID', 'Назва', 'Користувачі', 'Дозволені сторінки'])
const rolesTd = ref<RoleDtoView[]>([])

export { rolesTd, rolesTh }
