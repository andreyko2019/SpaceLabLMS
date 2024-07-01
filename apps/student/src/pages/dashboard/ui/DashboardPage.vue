<template>
  <section class="dashboard">
    <div class="container">
      <div class="dashboard__info">
        <div class="dashboard__info-row">
          <div class="dashboard__info-column">
            <!--            <template v-if="isLoading">-->
            <!--              <BaseSkeleton modify="avatar" />-->
            <!--            </template>-->

            <!--            <template>-->

            <div class="dashboard__info-photo">
              <BaseImage src="userAvatar" alt="avatar" />
            </div>
            <!--            </template>-->

            <!--            <template v-if="userAvatar == null">-->
            <!--              <div class="dashboard__info-not-avatar">-->
            <!--                <span>{{ userInfo[0][0] }}</span>-->
            <!--                <span>{{ userInfo[1][0] }}</span>-->
            <!--              </div>-->
            <!--            </template>-->

            <BaseButton
              class="dashboard__info-delete"
              type="button"
              text="Видалити фотографію"
            />
          </div>

          <div class="dashboard__info-user">
            <div class="dashboard__info-data">
              <!--              <template v-if="isLoading">-->
              <!--                <BaseSkeleton :num="6" modify="text" />-->
              <!--              </template>-->

              <!--              <template>-->
              <!--              <p-->
              <!--                class="dashboard__info-text dashboard__edit-text_side-a"-->
              <!--                v-for="(info, index) in dashboardUserInfo"-->
              <!--                :key="index"-->
              <!--              >-->
              <!--                {{ info }}-->
              <!--              </p>-->
              <!--              </template>-->
            </div>

            <div class="dashboard__info-data">
              <!--              <template v-if="isLoading">-->
              <!--                <BaseSkeleton :num="6" modify="text" />-->
              <!--              </template>-->

              <!--              <template>-->
              <!--              <p-->
              <!--                class="dashboard__info-text dashboard__info-text_data"-->
              <!--                v-for="(info, index) in userInfo.slice(0, 3)"-->
              <!--                :key="index"-->
              <!--              >-->
              <!--                {{ info }}-->
              <!--              </p>-->

              <!--              <a-->
              <!--                class="dashboard__info-text dashboard__info-text_link"-->
              <!--                v-for="(link, index) in userSocial"-->
              <!--                :key="index"-->
              <!--                :href="link.href"-->
              <!--              >-->
              <!--                {{ link.name }}-->
              <!--              </a>-->
              <!--              </template>-->
            </div>
          </div>
        </div>
      </div>

      <form class="dashboard__edit" @submit.prevent="onSubmit">
        <!--        <BaseInpFile label="Змінити фото" name="file"  />-->

        <!--        <BaseInput v-for="(inp, index) in fullName" :key="index" v-bind="inp" />-->

        <!--currentSituations-->
        <!--        <BaseDropdown-->
        <!--          :options="selected.selectedSituations"-->
        <!--          label="Поточне становище"-->
        <!--          val="Поточне становище"-->
        <!--          @update:modelValue="handleUpdate('currentSituations', $event)"-->
        <!--        />-->

        <!--        <BaseInput-->
        <!--          label="Робота"-->
        <!--          :is-disabled="formData.currentSituations !== 'Працюю'"-->
        <!--          name="work"-->
        <!--          v-model="formData.work"-->
        <!--        />-->

        <!--levelEnglish-->
        <!--        <BaseDropdown-->
        <!--          :options="selected.selectedEnglish"-->
        <!--          label="Рівень англійської"-->
        <!--          val="Рівень англійської"-->
        <!--          @update:modelValue="handleUpdate('levelEnglish', $event)"-->
        <!--        />-->

        <!--        <BaseInput-->
        <!--          v-for="(inp, index) in fullName.slice(7, 9)"-->
        <!--          :key="index"-->
        <!--          v-bind="inp"-->
        <!--          v-model="formData[inp.name]"-->
        <!--        />-->

        <BaseButton class="dashboard__save-btn" type="submit" text="Зберегти" />
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BaseButton,
  // BaseDropdown,
  BaseImage,
  // BaseInpFile,
  // BaseInput,
  // BaseSkeleton,
  // useFetchData,
  // useValidForm,
} from '@spacelablms/components'
//
// interface IFullName {
//   label: string
//   name: string
// }
//
// const fullName: IFullName[] = [
//   {
//     label: "Ім'я",
//     name: 'username',
//   },
//   {
//     label: 'По батькові',
//     name: 'middlename',
//   },
//   {
//     label: 'Прізвище',
//     name: 'lastname',
//   },
//   {
//     label: 'Дата народження',
//     name: 'years',
//   },
//   {
//     label: 'Телефон',
//     name: 'telephone',
//   },
//   {
//     label: 'Telegram',
//     name: 'telegram',
//   },
//   {
//     label: 'Email',
//     name: 'email',
//   },
//
//   {
//     label: 'Освіта',
//     name: 'education',
//   },
//   {
//     label: 'Пароль',
//     name: 'password',
//   },
//   {
//     label: 'Повтор пароля',
//     name: 'repeatpassword',
//   },
// ]

// const dashboardUserInfo: string[] = [
//   'Ім`я:',
//   'По батькові:',
//   'Прізвище:',
//   'Телеграм:',
//   'Телефон:',
//   'Email:',
// ]

// const forms = useValidForm()

async function onSubmit() {
  // const { valid } = await forms.instance.validate()
  // if (!valid) return
}
</script>

<style lang="scss">
@import './styles';
</style>
