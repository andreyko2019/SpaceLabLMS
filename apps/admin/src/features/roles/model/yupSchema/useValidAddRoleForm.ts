import { nextTick, ref } from 'vue'
import { useAppForm } from '@spacelablms/components'

import { DetailedErrorMessageItem } from '@/shared'
import { addRoleSchema, SchemaAddRoleType } from '@/features'

export function useValidAddRoleForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = addRoleSchema()

  const form = useAppForm<SchemaAddRoleType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    resetForm()

    await nextTick()
    await nextTick()

    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as keyof SchemaAddRoleType, value)
    })
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as keyof SchemaAddRoleType
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
