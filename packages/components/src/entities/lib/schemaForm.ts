import { InferType, object, string, date } from 'yup'

export function schemaForm() {
  return object({
    lastname: string().required().min(3).max(50),
    username: string().required().min(3).max(50),
    middlename: string().required().min(3).max(50),
    telegram: string().required(),
    telephone: string().required().max(13),
    years: date().required(),
  })
}

export type SchemaFormType = InferType<ReturnType<typeof schemaForm>>
