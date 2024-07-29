<script setup lang="ts">
import { BaseCheckbox } from '@/shared'
import { computed } from 'vue'

const emit = defineEmits(['update:value'])

const props = defineProps<{
  value: string[]
  name: string
  options: Array<{ name: string; id: string } | string>
}>()

const normalizedOptions = computed(() => {
  return props.options.map((option) => {
    if (typeof option === 'string') {
      return { id: option, name: option }
    }
    return option
  }) as Array<{ name: string; id: string }>
})

const check = (params: { checked: boolean; optionId: string }) => {
  const updateValue = [...props.value]
  if (params.checked) {
    updateValue.push(params.optionId)
  } else {
    const index = updateValue.indexOf(params.optionId)
    if (index !== -1) {
      updateValue.splice(index, 1)
    }
  }
  emit('update:value', updateValue)
}
</script>

<template>
  <div v-for="option in normalizedOptions" :key="option.id">
    <BaseCheckbox
      :label="option.name"
      :id="option.id"
      :name="name"
      :value="option.name"
      :checked="value.includes(option.id)"
      group
      @updateCheckboxGroup="check"
    />
  </div>
</template>
