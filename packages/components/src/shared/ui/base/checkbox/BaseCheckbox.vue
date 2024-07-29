<script setup lang="ts">
interface ICheckbox {
  name: string
  id: string
  value: string
  label: string
  checked: boolean
  disabled?: boolean
  group: boolean
  type: string
}

const emits = defineEmits(['update:checked', 'updateCheckboxGroup'])
const props = withDefaults(defineProps<ICheckbox>(), {
  type: 'checkbox',
  name: '',
  group: false,
})

const handleClick = (event: Event) => {
  const target = event.target

  if (target instanceof HTMLInputElement) {
    if (props.group) {
      emits('updateCheckboxGroup', {
        optionId: props.id,
        checked: target.checked,
      })
    } else {
      emits('update:checked', target.checked)
    }
  }
}
</script>

<template>
  <div :class="[{ 'switch-container': type === 'switch' }]">
    <input
      :class="[
        { 'checkbox': type === 'checkbox' },
        { 'switch': type === 'switch' },
      ]"
      type="checkbox"
      :name="name"
      :id="id"
      :value="value"
      :checked="checked"
      :disabled="disabled"
      @input="handleClick($event)"
    />
    <label :for="id">{{ label }}</label>
    <label :for="id" class="switch__label" v-if="type === 'switch'">
      {{ label }}
    </label>
  </div>
</template>

<style lang="scss">
@import 'BaseCheckbox';
</style>
