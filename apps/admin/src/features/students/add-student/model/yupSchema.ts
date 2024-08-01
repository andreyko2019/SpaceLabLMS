import { InferType, number, object, string } from 'yup'
import { useI18n } from 'vue-i18n'
import { isValidPhoneNumber } from 'libphonenumber-js'

const namePattern = /^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я]+)*$/
const name = namePattern
const lastNamePattern = namePattern
const middleNamePattern = namePattern
const emailPattern =
  /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/
const phonePattern = isValidPhoneNumber
const telegramPattern = /^@[a-zA-Z][a-zA-Z0-9_]{1,31}$/
const datePatterm = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/

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

    birthday: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('date', t('VALIDATION.DATE'), (value) => {
        return datePatterm.test(value)
      }),

    telephone: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('phone', t('VALIDATION.TELEPHONE'), (value) => {
        return phonePattern(value)
      }),

    totalmark: number().required(t('VALIDATION.THE_REQUIRED_FIELD')),

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

    work: string().max(100),
  })
}

export type SchemaAddStudentType = InferType<
  ReturnType<typeof addStudentSchema>
>
