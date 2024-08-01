<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

interface Option {
  id: string | number | null
  name: string
}

interface IProps {
  options: Option[]
  label?: string
  value?: string
  modelValue?: string
  selectId?: string | number | null
}

const props = defineProps<IProps>()

const selectedOption = ref<string | null>(null)
const isDropDown = ref(false)
const select = ref<HTMLElement | null>(null)
const selectList = ref<HTMLElement | null>(null)
const observer = ref<IntersectionObserver | null>(null)

const mappedSelectionOption = computed(() => {
  return selectedOption.value || props.value || props.modelValue
})

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
  (e: 'update:selectedId', id: string | number | null): void
}>()

const toggleOptionSelect = (option: Option) => {
  isDropDown.value = !isDropDown.value
  selectedOption.value = option.name

  emit('update:selectedId', option.id)
  emit('update:modelValue', option.name)
}

const closeDropDown = (event: MouseEvent) => {
  const target = event.target

  if (target instanceof HTMLElement) {
    if (!select.value?.contains(target)) {
      isDropDown.value = false
    }
  }
}

const setupIntersectionObserver = () => {
  if (!select.value || !selectList.value) return

  observer.value = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting && isDropDown.value) {
          selectList.value!.style.top = `-${
            selectList.value!.offsetHeight - 30
          }px`
          selectList.value!.style.bottom = 'auto'
        } else {
          selectList.value!.style.top = '100%'

          selectList.value!.style.bottom = 'auto'
        }
      })
    },
    {
      root: null,
      rootMargin: `0px 0px -300px 0px`,
      threshold: 0,
    }
  )

  observer.value.observe(select.value)
}

onMounted(() => {
  window.addEventListener('click', closeDropDown)
  setupIntersectionObserver()
})

onBeforeUnmount(() => {
  window.removeEventListener('click', closeDropDown)
  if (observer.value) {
    observer.value.disconnect()
  }
})
</script>

<template>
  <div class="select" ref="select">
    <p class="select__label" v-if="label">{{ label }}</p>

    <div class="select__selected" @click="isDropDown = true">
      <p class="select__current">{{ mappedSelectionOption }}</p>
    </div>

    <ul
      class="select__list"
      :class="{ 'select__list_act': isDropDown }"
      ref="selectList"
    >
      <li
        class="select__item"
        v-for="(option, index) in options"
        :key="index"
        @click="toggleOptionSelect(option)"
      >
        {{ option.name || option }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
@import 'Dropdown';
</style>
