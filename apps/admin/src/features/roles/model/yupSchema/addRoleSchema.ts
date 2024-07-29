import { InferType, object, string } from 'yup'
import { useI18n } from 'vue-i18n'

const namePattern = /^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я]+)*$/
const addName = namePattern
const addNameEng = namePattern
const addNameUkr = namePattern

export function addRoleSchema() {
  const { t } = useI18n()

  return object({
    add_name: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(5, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('name', t('VALIDATION.NAME'), (value) => {
        return addName.test(value)
      }),

    add_name_eng: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(5, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('name', t('VALIDATION.NAME'), (value) => {
        return addNameEng.test(value)
      }),

    add_name_ukr: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .min(5, t('VALIDATION.MIN'))
      .max(100, t('VALIDATION.MAX'))
      .test('name', t('VALIDATION.NAME'), (value) => {
        return addNameUkr.test(value)
      }),
  })
}

export type SchemaAddRoleType = InferType<ReturnType<typeof addRoleSchema>>
