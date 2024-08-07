<script setup lang="ts">
// import {
//   Dropdown,
//   BaseForm,
//   BaseInput,
//   BaseButton,
//   BaseDropdown,
// BaseCheckbox,
//   BaseIcon,
//   ThePreloader,
// } from '@spacelablms/components'
// import { ref } from 'vue'
// import { useThemeStore } from '@/entities'
//
// const test = useThemeStore()
// test.checkTheme()
// import { computed, onMounted, ref } from 'vue'
// import { course, getCourse } from '@/entities'
// import {
//   dropDown,
//   // dropDown,
//   links,
//   selectedValues,
//   // selectedValues,
//   studentInp,
//   useValidAddStudentForm,
// } from '@/features'
// import {
//   Add1CurrentSituationEnum,
//   StudentControllerApi,
//   useApi,
// } from '@/shared'
// import { useRouter } from 'vue-router'
//
// const router = useRouter()
// const courseId = ref()
// const isLoading = ref(false)
//
// const addStudentForm = useValidAddStudentForm()

//
// const isStudentEmployed = computed(() => {
//   // return (
//   //   selectedValues.value.currentSituations !== Add1CurrentSituationEnum.Working
//   // )
//   return true
// })
//
// function resetForm() {
//   addStudentForm.values.name = ''
//   addStudentForm.values.middlename = ''
//   addStudentForm.values.lastname = ''
//   addStudentForm.values.email = ''
//   addStudentForm.values.telegram = ''
//   addStudentForm.values.telephone = ''
//   addStudentForm.values.totalmark = 0
//   // selectedValues.value.currentSituations = undefined
//   // selectedValues.value.englishLevels = undefined
//   // selectedValues.value.preparationLevels = undefined
//   courseId.value = undefined
//   // selectedValues.value.studentStatuses = undefined
//   isVideoReview.value = false
// }
//
// async function postAddStudent() {
//   const api = useApi(StudentControllerApi)
//
//   try {
//     await api.add1({
//       name: addStudentForm.values.name,
//       middleName: addStudentForm.values.middlename,
//       lastName: addStudentForm.values.lastname,
//       email: addStudentForm.values.email,
//       telegram: addStudentForm.values.telegram,
//       telephone: addStudentForm.values.telephone,
//       totalMark: addStudentForm.values.totalmark,
//       // currentSituation: selectedValues.value.currentSituations,
//       // englishLevel: selectedValues.value.englishLevels,
//       // levelOfPreparation: selectedValues.value.preparationLevels,
//       courseId: +courseId.value,
//       // status: selectedValues.value.studentStatuses,
//       isVideoReview: isVideoReview.value,
//       display: false,
//     })
//     router.push('/student')
//   } catch (error) {
//     console.log(error)
//   } finally {
//     // resetForm()
//     isLoading.value = false
//   }
// }
// async function onSubmit() {
//   const { valid } = await addStudentForm.instance.validate()
//
//   if (!valid) return
//   isLoading.value = true
//   await postAddStudent()
//   // resetForm()
//   isLoading.value = false
// }
//
// async function feathData() {
//   await getCourse()
// }
// onMounted(feathData)
</script>

<template>
  <div class="add-student">
    <!--    {{ test.state }}-->
    <!--    <h1 class="add-student__title">Додати студента</h1>-->

    <!--    <div class="add-student__links">-->
    <!--      <router-link-->
    <!--        class="add-student__links-item"-->
    <!--        v-for="(link, index) in links"-->
    <!--        :key="index"-->
    <!--        :to="link.href"-->
    <!--        :class="{ 'add-student__links-item_act': !link.icon }"-->
    <!--      >-->
    <!--        {{ link.name }}-->

    <!--        <span v-if="link.icon">-->
    <!--          <BaseIcon :icon="link.icon" />-->
    <!--        </span>-->
    <!--      </router-link>-->
    <!--    </div>-->

    <!--    <BaseForm @send="onSubmit" class="add-student__form">-->
    <!--      <div class="add-student__column">-->
    <!--        <BaseInput-->
    <!--          v-for="(inp, index) in studentInp"-->
    <!--          :key="index"-->
    <!--          :label="inp.label"-->
    <!--          :name="inp.name"-->
    <!--          :type="inp.type"-->
    <!--        />-->

    <!--        &lt;!&ndash;        <BaseInput&ndash;&gt;-->
    <!--        &lt;!&ndash;          label="Робота"&ndash;&gt;-->
    <!--        &lt;!&ndash;          name="work"&ndash;&gt;-->
    <!--        &lt;!&ndash;          :is-disabled="isStudentEmployed"&ndash;&gt;-->
    <!--        &lt;!&ndash;        />&ndash;&gt;-->

    <!--        <BaseDropdown-->
    <!--          v-for="(item, index) in dropDown"-->
    <!--          :key="index"-->
    <!--          :options="item.option"-->
    <!--          :label="item.label"-->
    <!--          :val="item.label"-->
    <!--          @update:modelValue="selectedValues[item.select] = $event"-->
    <!--        />-->

    <!--        <Dropdown-->
    <!--          :options="course"-->
    <!--          label="Курс"-->
    <!--          value="Назва курсу"-->
    <!--          :selectId="courseId"-->
    <!--          @update:selectedId="courseId = $event"-->
    <!--        />-->

    <!--    <BaseCheckbox-->
    <!--      label="Надав відео відгук"-->
    <!--      id="video"-->
    <!--      name="video"-->
    <!--      value="Надав відео відгук"-->
    <!--      v-model:checked="isVideoReview"-->
    <!--    />-->
    <!--        </div>-->

    <!--      <div class="add-student__btn">-->
    <!--        <BaseButton text="Додати студента" type="submit" modify="primary" />-->
    <!--      </div>-->
    <!--    </BaseForm>-->

    <!--    <ThePreloader v-if="isLoading" />-->
  </div>
</template>

<!--<style lang="scss">-->
<!--@import 'AddStudent';-->
<!--</style>-->
