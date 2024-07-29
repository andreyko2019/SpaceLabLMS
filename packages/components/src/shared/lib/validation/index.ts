export function useValidationErrorConvertor() {
  function t(key: string, values?: Record<string, any>): string {
    if (values) {
      let message = key
      for (const [k, v] of Object.entries(values)) {
        message = message.replace(`{${k}}`, String(v))
      }
      return message
    }
    return key
  }

  function getValidationMessage(error: any) {
    if (typeof error === 'string') {
      return t(error)
    }

    if (
      typeof error === 'object' &&
      typeof error.key === 'string' &&
      typeof error.values === 'object'
    ) {
      return t(error.key, error.values)
    }

    return t('VALIDATION.INVALID_FIELD')
  }

  return { getValidationMessage }
}