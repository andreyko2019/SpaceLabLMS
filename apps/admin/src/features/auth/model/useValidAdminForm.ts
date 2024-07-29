import { useAppForm } from '@spacelablms/components'
import { nextTick, ref } from 'vue'

import { type SchemaAuthType, authAdminSchema } from '@/features'
import type { DetailedErrorMessageItem } from '@/shared'

export function useValidAdminForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = authAdminSchema()
  const form = useAppForm<SchemaAuthType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    resetForm()

    await nextTick()
    await nextTick()

    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as keyof SchemaAuthType, value)
    })
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as keyof SchemaAuthType
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
