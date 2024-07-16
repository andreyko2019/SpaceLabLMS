// import { SchemaFormType } from '@/entities/'
import { nextTick, ref } from 'vue'
import { useAppForm } from '@/index'

import { DetailedErrorMessageItem } from '@spacelablms/student/src/shared/api/error'
import { Path } from 'vee-validate'

export function useValidForm<T extends object>(nameSchema: any) {
  const serverErrorMessages = ref<string[]>([])

  const schema = nameSchema
  const form = useAppForm<T>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    resetForm()

    await nextTick()
    await nextTick()

    Object.entries(data).forEach(([key, value]) => {
      setFieldValue(key as Path<T>, value)
    })
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach(({ field, message }) => {
      const formField = field.replace(/Id/g, 'fg') as Path<T>
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
