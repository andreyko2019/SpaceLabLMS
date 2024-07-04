<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

// import { BaseIcon } from '@/shared'

interface IDropDownProps {
  options: Array<string>
  label: string
  val: string
  modelValue?: string | null
}

const props = defineProps<IDropDownProps>()

const emit = defineEmits(['update:modelValue'])
const dropDown = ref<HTMLElement | null>(null)
const selectedOption = ref<string | null>(null)
const isDropDownVisible = ref<boolean>(false)

const mappedSelectionOption = computed(() => {
  return selectedOption.value || props.val
})

const toggleOptionSelect = async (option: string) => {
  selectedOption.value = option
  emit('update:modelValue', option)

  setTimeout(() => {
    isDropDownVisible.value = false
  }, 300)
}

const closeDropDown = (event: MouseEvent) => {
  if (!dropDown.value?.contains(event.target as Node)) {
    isDropDownVisible.value = false
  }
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
})
</script>

<template>
  <div class="dropdown" ref="dropDown">
    <p class="dropdown__label" v-if="label">{{ label }}</p>

    <div class="dropdown__selected" @click="isDropDownVisible = true">
      <p class="dropdown__current">{{ mappedSelectionOption }}</p>

      <div
        class="dropdown__arrow"
        :class="{ dropdown__arrow_act: isDropDownVisible }"
      >
        <!--        <BaseIcon icon="arrow-down" />-->
      </div>
    </div>
    <transition name="slide-fade">
      <ul v-if="isDropDownVisible" class="dropdown__options">
        <li
          v-for="(option, index) in props.options"
          :key="index"
          class="dropdown__option"
          @click="toggleOptionSelect(option)"
        >
          {{ option }}
        </li>
      </ul>
    </transition>
  </div>
</template>

<style lang="scss">
@import 'BaseDropdown';
</style>
