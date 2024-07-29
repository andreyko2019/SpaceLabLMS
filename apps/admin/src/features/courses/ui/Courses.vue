<script setup lang="ts">
// import {
//   BaseIcon,
//   BaseInput,
//   BaseButton,
//   TheModal,
//   BaseForm,
//   // BaseCheckbox,
//   // BaseCheckboxGroup,
//   // BaseDropdown,
//   useToggle,
// } from '@spacelablms/components'

// import { ref } from 'vue'

// const openModalAdd = useToggle(isModalAdd)
// const closeModalAdd = useToggle(isModalAdd)
// const isChecked = ref(true)

// async function addCourseOnSubmit() {}
</script>

<template>
  <!--  <div class="courses">-->
  <!--    <h1 class="courses__title">Курси</h1>-->

  <!--    <div class="courses__links">-->
  <!--      <router-link-->
  <!--        class="courses__links-item"-->
  <!--        v-for="(link, index) in links"-->
  <!--        :key="index"-->
  <!--        :to="link.href"-->
  <!--      >-->
  <!--        {{ link.name }}-->
  <!--        <span> <BaseIcon icon="arrow-right" /></span>-->
  <!--      </router-link>-->
  <!--    </div>-->

  <!--    <div class="courses__row">-->
  <!--      <div class="courses__search">-->
  <!--        <BaseInput />-->
  <!--      </div>-->

  <!--      <div class="courses__add">-->
  <!--        <BaseButton modify="primary" text="Додати курс" @click="openModalAdd" />-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <TheModal v-if="isModalAdd" @close="closeModalAdd" title="Новий курс">-->
  <!--      <BaseForm @send="addCourseOnSubmit">-->
  <!--        <BaseInput-->
  <!--          placeholder="Назва курсу"-->
  <!--          label="Назва курсу"-->
  <!--          name="course"-->
  <!--        />-->
  <!--      </BaseForm>-->
  <!--    </TheModal>-->

  <!--    <router-view />-->
  <!--  </div>-->
</template>

<style lang="scss">
@import 'Courses';
</style>
