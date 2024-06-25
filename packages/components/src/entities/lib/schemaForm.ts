import { InferType, object, string } from 'yup'

export type SchemaFormType = InferType<ReturnType<typeof schemaForm>>

export function schemaForm() {
  return object({
    lastname: string().required().min(3),
    username: string().required().min(3),
    middlename: string().required().min(3),
  })
}
