import { SchemaFormType, schemaForm } from '@/entities/'
import { nextTick, ref } from 'vue'
import { useAppForm } from '@/index'
import { DetailedErrorMessageItem } from '@spacelablms/student/src/shared/api/error'

export function useValidForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = schemaForm()
  const form = useAppForm<SchemaFormType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: Partial<SchemaFormType>) {
    resetForm()
    await nextTick()
    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as keyof SchemaFormType, value)
    })
  }
  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as keyof SchemaFormType
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
