import { nextTick, ref } from 'vue'
import { useAppForm } from '@spacelablms/components'

import { DetailedErrorMessageItem } from '@/shared'
import { addStudentSchema, SchemaAddStudentType } from '@/features'

export function useValidAddStudentForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = addStudentSchema()
  const form = useAppForm<SchemaAddStudentType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    resetForm()

    await nextTick()
    await nextTick()

    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as keyof SchemaAddStudentType, value)
    })
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as keyof SchemaAddStudentType
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
