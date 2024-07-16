import { InferType, object, string } from 'yup'
import { useI18n } from 'vue-i18n'

export type SchemaAuthType = InferType<ReturnType<typeof authSchema>>

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export function authSchema() {
  const { t } = useI18n()
  const errorEmail: string = t('VALIDATION.EMAIL')
  // const errorPassword: string = t('VALIDATION.PASSWORD')

  return object({
    email: string()
      .required(t('VALIDATION.THE_REQUIRED_FIELD'))
      .test('email', errorEmail, (value) => {
        // console.log(context.parent)
        return emailPattern.test(value)
      }),
    password: string().required(t('VALIDATION.THE_REQUIRED_FIELD')),
  })
}

// .test('password', errorPassword, (value) => {
//   return passwordPatter.test(value)
// }),

// const passwordPatter =
//   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*_)(?!.*\W)(?!.* ).{8,}$/
