import { SchemaFormType, schemaForm } from '@/entities'
import { nextTick, ref } from 'vue'
import { useAppForm } from '@/index'
import { DetailedErrorMessageItem } from '@spacelablms/student/src/shared/api/error'

// export type FormSchemaType = ReturnType<typeof useValidForm>

export function useValidForm() {
  const serverErrorMessages = ref<string[]>([])

  const schema = schemaForm()
  const form = useAppForm<SchemaFormType>({
    validationSchema: schema,
    initialValues: schema.getDefault(),
  })

  const { values, setFieldValue, resetForm } = form

  async function setValuesFromObject(data: object) {
    const clonedData = JSON.parse(JSON.stringify(data))
    resetForm()

    await nextTick()
    await nextTick()

    for (const key of Object.keys(values)) {
      setFieldValue(key as keyof typeof form.values, clonedData[key])
    }
  }

  function errorsForm(errors: DetailedErrorMessageItem[]) {
    errors.forEach((error) => {
      const incomeField = error.field.replace(
        /Id/g,
        'fg'
      ) as keyof typeof form.values
      form.setFieldError(incomeField, error.message)
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
