<script setup lang="ts">
// import {
//   BaseInput,
//   BaseButton,
//   TheModal,
//   BaseForm,
//   BaseCheckboxGroup,
//   useToggle,
// } from '@spacelablms/components'
// import { roleData, useValidAddRoleForm } from '@/features'
// import { onMounted } from 'vue'
// import { EnumControllerApi, RoleControllerApi, useApi } from '@/shared'
// const { t } = useI18n()
// import { useI18n } from 'vue-i18n'
//
// const { isModalAdd, roleNameInp, rolePages, selectedRolePages } = roleData()
// const addRoleForm = useValidAddRoleForm()
//
// const openAddRole = useToggle(isModalAdd)
// const closeAddRole = useToggle(isModalAdd)
//
// async function getNamePages() {
//   const pageApi = useApi(EnumControllerApi)
//
//   const dataPages = await pageApi.listPages()
//
//   if (dataPages.data) {
//     const newPage = dataPages.data
//
//     newPage.forEach((item) => {
//       rolePages.value.push(t(`PAGES.${item}`))
//     })
//   }
// }

// async function addRoleOnSubmit() {
//   const api = useApi(RoleControllerApi)
//
//   const dataRole = await api.add2({
//     name: addRoleForm.values.add_name,
//     nameEng: addRoleForm.values.add_name_eng,
//     nameUkr: addRoleForm.values.add_name_ukr,
//     pages: selectedRolePages.value,
//   })
//
//   console.log(dataRole)
// }
//
// async function fetchData() {
//   await getNamePages()
// }
//
// onMounted(fetchData)
</script>

<template>
  <!--  <div class="create-role">-->
  <!--    <h1 class="create-role__title">Ролі</h1>-->

  <!--    <div class="create-role__row">-->
  <!--      <div class="create-role__search">-->
  <!--        <BaseInput />-->
  <!--      </div>-->

  <!--      <div class="create-role__add">-->
  <!--        <BaseButton modify="primary" text="Додати роль" @click="openAddRole" />-->
  <!--      </div>-->
  <!--    </div>-->

  <!--    <div class="create-role__table"></div>-->

  <!--    <TheModal v-if="isModalAdd" @close="closeAddRole" title="Додати роль">-->
  <!--      <BaseForm @send="addRoleOnSubmit">-->
  <!--        <BaseInput-->
  <!--          v-for="(inp, index) in roleNameInp"-->
  <!--          :key="index"-->
  <!--          :label="inp.label"-->
  <!--          :name="inp.name"-->
  <!--        />-->
  <!--        {{ selectedRolePages }}-->
  <!--        <div class="create-role__checkbox">-->
  <!--          <BaseCheckboxGroup-->
  <!--            v-model:value="selectedRolePages"-->
  <!--            name="role"-->
  <!--            :options="rolePages"-->
  <!--          />-->
  <!--        </div>-->

  <!--        <BaseButton type="submit" text="add role" modify="primary" />-->
  <!--      </BaseForm>-->
  <!--    </TheModal>-->
  <!--  </div>-->
</template>

<style lang="scss">
@import 'CreateRoles';
</style>
