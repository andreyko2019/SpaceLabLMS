import { computed, ref, Ref, toRef } from 'vue'
import { useField } from 'vee-validate'

interface UseCustomFieldOptions<T> {
    name: string | null
    keepValueOnUnmount?: boolean
    modelValue: T
}

interface CustomField<T> {
    value: Ref<T>
    setValue: (value: T) => void
    errorMessage: Ref<string | undefined>
}

export function useCustomField<T>(options: UseCustomFieldOptions<T>): CustomField<T> {
    if (options.name !== null) {
        const nameRef = computed(() => options.name ?? '')
        const keepValueOnUnmount = computed(() => options.keepValueOnUnmount ?? false)
        return useField<T>(nameRef, undefined, {
            syncVModel: false,
            keepValueOnUnmount
        })
    }

    return {
        value: toRef(options, 'modelValue'),
        setValue: (value: T) => (options.modelValue = value),
        errorMessage: ref(undefined)
    }
}