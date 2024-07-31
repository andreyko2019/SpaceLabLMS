<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { BaseIcon } from '@/shared'

interface IDropDownProps {
  options: Array<string>
  label?: string
  val?: string
  modelValue?: string | null
}

const props = defineProps<IDropDownProps>()
const emit = defineEmits(['update:modelValue'])

const dropDown = ref<HTMLElement | null>(null)
const dropdownOptions = ref<HTMLElement | null>(null)
const selectedOption = ref<string | null>(null)
const isDropDownVisible = ref<boolean>(false)
const observer = ref<IntersectionObserver | null>(null)

const mappedSelectionOption = computed(() => {
  return selectedOption.value || props.val || props.modelValue
})

const toggleOptionSelect = async (option: string) => {
  isDropDownVisible.value = !isDropDownVisible.value
  selectedOption.value = option

  emit('update:modelValue', option)
}

const closeDropDown = (event: MouseEvent) => {
  const target = event.target

  if (target instanceof HTMLElement) {
    if (!dropDown.value?.contains(target)) {
      isDropDownVisible.value = false
    }
  }
}

const handleIntersection = () => {
  if (!dropDown.value || !dropdownOptions.value) return

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isDropDownVisible.value) {
          dropdownOptions.value!.style.top = `-${
            dropdownOptions.value!.offsetHeight - 30
          }px`
          dropdownOptions.value!.style.bottom = 'auto'
        } else {
          dropdownOptions.value!.style.top = '100%'
          dropdownOptions.value!.style.bottom = 'auto'
        }
      })
    },
    {
      root: null,
      rootMargin: '0px 0px -300px 0px',
      threshold: 0,
    }
  )
  observer.value.observe(dropdownOptions.value)
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
  handleIntersection()
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
  if (observer.value) {
    observer.value.disconnect()
  }
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
        <BaseIcon icon="arrow-down" />
      </div>
    </div>

    <transition name="slide-fade">
      <ul
        ref="dropdownOptions"
        class="dropdown__options"
        :class="{ 'dropdown__options_act': isDropDownVisible }"
      >
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
