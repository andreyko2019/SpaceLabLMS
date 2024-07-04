<script setup lang="ts">
import { onMounted, Ref, ref } from 'vue'
import {
  FormInput,
  BaseButton,
  BaseDropdown,
  BaseInpFile,
  IConfig,
  useCreateConfig,
  useGetCookie,
} from '@spacelablms/components'
import {
  useApi,
  PersonalAreaControllerApi,
  EnumControllerApi,
  EditPersonalDataCurrentSituationEnum,
  EditPersonalDataEnglishLevelEnum,
  PersonalAreaControllerApiEditPersonalDataRequest,
} from '@/shared/api'
import { AxiosResponse } from 'axios'
// import { ResponseError } from '@/shared/lib/use/base/interfaceAndType'

interface IFullName {
  label: string
  name: string
  value: string
}

type EditPersonalEnum =
  | EditPersonalDataCurrentSituationEnum
  | EditPersonalDataEnglishLevelEnum

type StudentType = PersonalAreaControllerApiEditPersonalDataRequest

const fullName = ref<IFullName[]>([
  { label: "Ім'я", name: 'name', value: '' },
  { label: 'По батькові', name: 'middleName', value: '' },
  { label: 'Прізвище', name: 'lastName', value: '' },
  { label: 'Дата народження', name: 'birthday', value: '' },
  { label: 'Телефон', name: 'telephone', value: '' },
  { label: 'Telegram', name: 'telegram', value: '' },
  { label: 'Email', name: 'email', value: '' },
  { label: 'Пароль', name: 'password', value: '' },
  { label: 'Повтор пароля', name: 'repeatpassword', value: '' },
])

const education = ref<{ value: string }[]>([])

const englishLevel = ref<string[]>([])
const currentSituations = ref<string[]>([])
const countInp = ref(1)

const authToken = useGetCookie('student-access-token')
const isWork = ref(false)
const selectedEnglish: any = ref('')
const selectedSituation: any = ref('')

const test = ref('')

const userInfo: Ref<PersonalAreaControllerApiEditPersonalDataRequest> = ref({
  name: '',
  lastName: '',
  middleName: '',
  telegram: '',
  telephone: '',
  email: '',
  birthday: '',
  oldFile: '',
  work: '',
  education: [],
  englishLevel: selectedEnglish,
  currentSituation: selectedSituation,
  password: '',
})

const handleUpdate = (key: string, value: EditPersonalEnum) => {
  if (key === 'currentSituations') {
    selectedSituation.value = value
    console.log(value)
    if (value === EditPersonalDataCurrentSituationEnum.Working) {
      isWork.value = true
    }
  }
  //
  if (key === 'englishLevel') {
    selectedEnglish.value = value
    console.log(selectedEnglish.value)
  }
}
async function getStudentContactData(config: IConfig) {
  const apiStudent = useApi(PersonalAreaControllerApi)

  const studentData = await apiStudent.getPersonalData(config)

  if (studentData.data) {
    const contact = studentData.data.contact

    fullName.value.forEach((item) => {
      switch (item.name) {
        case 'username':
          item.value = contact.name
          break
        case 'middlename':
          item.value = contact.middleName
          break
        case 'lastname':
          item.value = contact.lastName
          break
        case 'telephone':
          item.name = contact.telephone
          break
        case 'telegram':
          item.name = contact.telegram
          break
        case 'email':
          item.name = contact.email
          break
        default:
          break
      }
    })
  }
}

async function getEnumEnglishLevel(config: IConfig) {
  const apiEnglishLevel = useApi(EnumControllerApi)

  const dataEnglishLevel = await apiEnglishLevel.listEnglishLevels(config)

  if (dataEnglishLevel.data) englishLevel.value = dataEnglishLevel.data
}

async function getEnumCurrentSituations(config: IConfig) {
  const apiCurrentSituations = useApi(EnumControllerApi)

  const dataCurrentSituations =
    await apiCurrentSituations.listCurrentSituations(config)

  if (dataCurrentSituations.data) {
    currentSituations.value = dataCurrentSituations.data
  }
}

async function patchStudentData(data: StudentType, config: IConfig) {
  const api = useApi(PersonalAreaControllerApi)

  await api.editPersonalData(data, config)
}
async function onSubmit() {
  console.log(userInfo.value)
  // const config = useCreateConfig(authToken)
  //
  // try {
  //   await patchStudentData(userInfo.value, config)
  //   console.log('ok')
  // } catch (error) {
  //   console.error('Помилка при оновленні даних:', error)
  // }
}

async function fetchData() {
  const config = useCreateConfig(authToken)
  await getStudentContactData(config)
  await getEnumEnglishLevel(config)
  await getEnumCurrentSituations(config)
}

// onMounted(async () => {
//   await fetchData()
// })

// })

onMounted(fetchData)

function addEducationItem() {
  education.value.push({ value: '' })
  countInp.value++
}

const updateEducation = (index: number, event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const inputElement = event.target
    const inputValue = inputElement.value

    if (userInfo.value.education) {
      userInfo.value.education[index] = inputValue
    }
  }
}
// const updateFile = (file: File) => {
//   userInfo.value = { ...userInfo.value, newFile: file }
// }
</script>

<template>
  <form class="change-info" @submit.prevent="onSubmit">
    <div class="change-info__column">
      <BaseInpFile label="Змінити фото" name="file" @update:modelValue="test" />

      <FormInput
        v-for="(inp, index) in fullName.slice(0, 7)"
        :key="index"
        :label="inp.label"
        :name="inp.name"
        v-model="userInfo[inp.name]"
      />

      <div class="change-info__education">
        <FormInput
          v-for="(item, index) in education"
          :key="index"
          label="Освіта"
          :name="'education' + index"
          v-model="item.value"
          @input="updateEducation(index, $event)"
        />

        <BaseButton
          class="change-info__btn"
          text="+"
          @click="addEducationItem"
        />
      </div>

      <BaseDropdown
        :options="englishLevel"
        label="Рівень англійської"
        val="Рівень англійської"
        @update:modelValue="handleUpdate('englishLevel', $event)"
      />

      <BaseDropdown
        :options="currentSituations"
        label="Поточне становище"
        val="Поточне становище"
        @update:modelValue="handleUpdate('currentSituations', $event)"
      />

      <FormInput
        label="Робота"
        name="work"
        :is-disabled="!isWork"
        v-model="userInfo.work"
      />

      <FormInput
        v-for="(inp, index) in fullName.slice(7, 9)"
        :key="index"
        :label="inp.label"
        :name="inp.name"
        v-model="userInfo[inp.name]"
      />
    </div>
    <BaseButton class="change-info__btn-save" type="submit" text="Зберегти" />
  </form>
</template>

<style lang="scss">
@import 'ChangeStudentInfo';
</style>
