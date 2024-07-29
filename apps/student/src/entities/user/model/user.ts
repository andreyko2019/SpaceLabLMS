import { reactive } from 'vue'
import { PersonalDataResponseForAdd } from '@/shared/api'

export const userInfo = reactive<PersonalDataResponseForAdd>({
  name: '',

  image: '',
})

interface INamePage {
  href: string
  name: string
}
export const namePage: Array<INamePage> = [
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
]

export const tests = () => {
  console.log(12324)
}
