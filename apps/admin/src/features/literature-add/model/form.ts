import { nextTick, ref } from 'vue'
import { useAppForm } from '@spacelablms/components'

import { DetailedErrorMessageItem } from '@/shared'
import {SchemaAddLiteratureType, yupAddLiteratureSchema} from '@/features'

export function useValidAddLiterature() {
    const serverErrorMessages = ref<string[]>([])

    const schema = yupAddLiteratureSchema()
    const form = useAppForm<SchemaAddLiteratureType>({
        validationSchema: schema,
        initialValues: schema.getDefault(),
    })

    const { values, setFieldValue, resetForm } = form

    async function setValuesFromObject(data: object) {
        resetForm()

        await nextTick()
        await nextTick()

        Object.entries(data).forEach(([key, value]) => {
            setFieldValue(key as keyof SchemaAddLiteratureType, value)
        })
    }

    function errorsForm(errors: DetailedErrorMessageItem[]) {
        errors.forEach(({ field, message }) => {
            const formField = field.replace(/Id/g, 'fg') as keyof SchemaAddLiteratureType
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
