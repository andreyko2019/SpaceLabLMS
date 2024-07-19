<script setup lang="ts">
import {
  BaseIcon,
  BaseInput,
  BaseButton,
  TheModal,
  BaseForm,
  // BaseCheckbox,
  BaseCheckboxGroup,
  useToggle,
} from '@spacelablms/components'
import { coursesData } from '@/features'
import { ref } from 'vue'

const { links, isModalAdd } = coursesData()

const openModalAdd = useToggle(isModalAdd)
const closeModalAdd = useToggle(isModalAdd)
const isChecked = ref(true)

const listOfHeroes = ref([
  { name: 'Spider Man', id: 'h1' },
  { name: 'Batman', id: 'h2' },
  { name: 'Tor', id: 'h3' },
  { name: 'Loki', id: 'h4' },
])
async function addCourseOnSubmit() {}

const selectedHeroes = ref(['h1', 'h3'])
</script>

<template>
  <div class="courses">
    <h1 class="courses__title">Курси</h1>

    <div class="courses__links">
      <router-link
        class="courses__links-item"
        v-for="(link, index) in links"
        :key="index"
        :to="link.href"
      >
        {{ link.name }}
        <span> <BaseIcon icon="arrow-right" /></span>
      </router-link>
    </div>

    <div class="courses__row">
      <div class="courses__search">
        <BaseInput />
      </div>

      <div class="courses__add">
        <BaseButton modify="primary" text="Додати курс" @click="openModalAdd" />
      </div>
    </div>

    <TheModal v-if="isModalAdd" @close="closeModalAdd" title="Новий курс">
      <BaseForm @send="addCourseOnSubmit">
        <BaseInput
          placeholder="Назва курсу"
          label="Назва курсу"
          name="course"
        />

        {{ isChecked }}

        <!--        <BaseCheckbox-->
        <!--          id="check"-->
        <!--          name="check"-->
        <!--          value="check"-->
        <!--          label="check"-->
        <!--          v-model:checked="isChecked"-->
        <!--        />-->
        <p>Selected Heroes: {{ selectedHeroes }}</p>
        <BaseCheckboxGroup
          v-model:value="selectedHeroes"
          name="heroes"
          :options="listOfHeroes"
        />
      </BaseForm>
    </TheModal>
  </div>
</template>

<style lang="scss">
@import 'Courses';
</style>
