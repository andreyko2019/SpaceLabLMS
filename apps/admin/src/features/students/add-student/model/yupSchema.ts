import { date, InferType, object, string } from 'yup'
import { useI18n } from 'vue-i18n'

const namePattern = /^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я]+)*$/
const name = namePattern
const lastNamePattern = namePattern
const middleNamePattern = namePattern
const emailPattern =
  /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/
const phonePattern = /^(\+380)[0-9]{9}$/
const telegramPattern = /^@[a-zA-Z][a-zA-Z0-9_]{1,31}$/

export function addStudentSchema() {
  const { t } = useI18n()

  return object({
    name: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(3, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('name', t('VALIDATION.NAME'), (value) => {
        return name.test(value)
      }),

    middlename: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(3, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('middlename', t('VALIDATION.MIDDLENAME'), (value) => {
        return middleNamePattern.test(value)
      }),

    lastname: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(3, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('lastname', t('VALIDATION.LASTNAME'), (value) => {
        return lastNamePattern.test(value)
      }),

    birthday: date().required(t('VALIDATION.THE_REQUIRED_FIELD')),

    telephone: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('phone', t('VALIDATION.TELEPHONE'), (value) => {
        return phonePattern.test(value)
      }),

    email: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('email', t('VALIDATION.EMAIL'), (value) => {
        return emailPattern.test(value)
      }),

    telegram: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('telegram', t('VALIDATION.TELEGRAM'), (value) => {
        return telegramPattern.test(value)
      }),
  })
}

export type SchemaAddStudentType = InferType<
  ReturnType<typeof addStudentSchema>
>
