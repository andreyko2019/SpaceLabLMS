import { nextTick, ref } from 'vue'
import { useAppForm } from '@spacelablms/components'

import { DetailedErrorMessageItem } from '@/shared'
import { addContactSchema, SchemaAddContactType } from '@/features'
// todo виправити схему
export function useValidAddContactForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = addContactSchema()
  const form = useAppForm<SchemaAddContactType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    resetForm()

    await nextTick()
    await nextTick()

    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as keyof SchemaAddContactType, value)
    })
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as keyof SchemaAddContactType
      form.setFieldError(formField, message)
    })
  }

  return {
    values,
    instance: form,
    serverErrorMessages,
    setValuesFromObject,
    errorsForm,
  }
}
