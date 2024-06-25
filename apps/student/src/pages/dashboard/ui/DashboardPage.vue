<template>
  <section class="dashboard">
    <div class="container">
      <div class="dashboard__info">
        <div class="dashboard__info-row">
          <div class="dashboard__info-column">
            <template v-if="isLoading">
              <BaseSkeleton modify="avatar" />
            </template>

            <template v-if="userAvatar">
              <div class="dashboard__info-photo">
                <BaseImage :src="userAvatar" alt="avatar" />
              </div>
            </template>

            <template v-if="userAvatar == null">
              <div class="dashboard__info-not-avatar">
                <span>{{ userInfo[0][0] }}</span>
                <span>{{ userInfo[1][0] }}</span>
              </div>
            </template>

            <BaseButton
              class="dashboard__info-delete"
              type="button"
              text="Видалити фотографію"
            />
          </div>

          <div class="dashboard__info-user">
            <div class="dashboard__info-data">
              <template v-if="isLoading">
                <BaseSkeleton :num="6" modify="text" />
              </template>

              <template v-else>
                <p
                  class="dashboard__info-text dashboard__edit-text_side-a"
                  v-for="(info, index) in dashboardUserInfo"
                  :key="index"
                >
                  {{ info }}
                </p>
              </template>
            </div>

            <div class="dashboard__info-data">
              <template v-if="isLoading">
                <BaseSkeleton :num="6" modify="text" />
              </template>

              <template v-else>
                <p
                  class="dashboard__info-text dashboard__info-text_data"
                  v-for="(info, index) in userInfo.slice(0, 3)"
                  :key="index"
                >
                  {{ info }}
                </p>

                <a
                  class="dashboard__info-text dashboard__info-text_link"
                  v-for="(link, index) in userSocial"
                  :key="index"
                  :href="link.href"
                >
                  {{ link.name }}
                </a>
              </template>
            </div>
          </div>
        </div>
      </div>

      <form class="dashboard__edit">
        <BaseInpFile label="Змінити фото" name="file" />

        <BaseInput
          v-for="(inp, index) in fullName"
          :key="index"
          :label="inp.label"
          :name="inp.name"
          :placeholder="inp.label"
        />
      </form>

      <!--      <div class="dashboard__history"></div>-->

      <!--      <div class="dashboard__edit">-->
      <!--        <div class="dashboard__edit-row">-->
      <!--          <div class="dashboard__edit-avatar">-->
      <!--            <div class="dashboard__edit-photo">-->
      <!--              <BaseImage src="userAvatar" alt="avatar" />-->
      <!--            </div>-->

      <!--            <BaseButton-->
      <!--              class="dashboard__edit-delete"-->
      <!--              type="button"-->
      <!--              text="Видалити фотографію"-->
      <!--            />-->
      <!--          </div>-->

      <!--          <div class="dashboard__edit-info">-->
      <!--            <div class="dashboard__edit-data">-->
      <!--              <p-->
      <!--                class="dashboard__edit-text dashboard__edit-text_side-a"-->
      <!--                v-for="(info, index) in dashboardUserInfo"-->
      <!--                :key="index"-->
      <!--              >-->
      <!--                {{ info }}-->
      <!--              </p>-->
      <!--            </div>-->
      <!--            <div class="dashboard__edit-data">-->
      <!--              <p-->
      <!--                class="dashboard__edit-text"-->
      <!--                v-for="(data, index) in userInfo"-->
      <!--                :key="index"-->
      <!--              >-->
      <!--                {{ data }}-->
      <!--              </p>-->
      <!--            </div>-->
      <!--          </div>-->
      <!--        </div>-->

      <!--        <form class="dashboard__edit-fullname" @submit.prevent="onSubmit">-->
      <!--          <BaseInput-->
      <!--            v-for="(inp, index) in fullName"-->
      <!--            :key="index"-->
      <!--            :label="inp.label"-->
      <!--            :name="inp.name"-->
      <!--            :placeholder="inp.label"-->
      <!--          />-->

      <!--          <BaseDropdown-->
      <!--            :options="currentSituations"-->
      <!--            val="Поточне становище"-->
      <!--            label="Поточне становище"-->
      <!--          />-->

      <!--          <div class="dashboard__save">-->
      <!--            <BaseButton-->
      <!--              class="dashboard__save-btn"-->
      <!--              type="submit"-->
      <!--              text="Зберегти"-->
      <!--            />-->

      <!--            <p></p>-->
      <!--          </div>-->
      <!--        </form>-->
      <!--      </div>-->
    </div>
  </section>
</template>

<script setup lang="ts">
import {
  BaseButton,
  BaseImage,
  BaseSkeleton,
  BaseInput,
  BaseInpFile,
  useFetchData,
} from '@spacelablms/components'
import { onMounted, ref } from 'vue'
import { PersonalAreaControllerApi } from '@/shared/api'

interface IUserSocial {
  name: string
  href: string
}
interface IDashboardForm {
  label: string
  name: string
}
// // const { t } = useI18n({ useScope: 'global' })

const userInfo = ref<string[]>([])
const userAvatar = ref<string>('')
const isLoading = ref(true)
const userSocial = ref<Array<IUserSocial>>([])

// const forms = useValidForm()
//
// async function onSubmit() {
//   const { valid } = await forms.instance.validate()
//   console.log(valid)
//   if (!valid) {
//     return
//   }
//   isLoading.value = true
// }
//

async function getUserInfo() {
  try {
    const response = await useFetchData(
      PersonalAreaControllerApi,
      'getPersonalData'
    )

    if (response.data) {
      const { contact: userContact, image: userImg } = response.data
      const { name, middleName, lastName, telegram, telephone, email } =
        userContact

      userInfo.value = [name, middleName, lastName]
      userAvatar.value = userImg

      userSocial.value = [
        {
          name: telegram,
          href: `https://t.me/${telegram}`,
        },
        {
          name: telephone,
          href: `tel:${telephone}`,
        },
        {
          name: email,
          href: `mailto:${email}`,
        },
      ]

      isLoading.value = false

      console.log(userAvatar.value)
    }
  } catch (error) {
    console.error('Помилка при отриманні даних користувача:', error)
    isLoading.value = false
  }
}
//
onMounted(async () => {
  await getUserInfo()
})
//

const fullName: IDashboardForm[] = [
  {
    label: 'Прізвище',
    name: 'lastname',
  },
  {
    label: "Ім'я",
    name: 'username',
  },
  {
    label: 'По батькові',
    name: 'middlename',
  },
]
//
// const dashboardForm: IDashboardForm[] = [
//   {
//     label: 'Telegram',
//     name: 'telegram',
//   },
//   {
//     label: 'Email',
//     name: 'email',
//   },
//   {
//     label: 'Телефон',
//     name: 'telephone',
//   },
//   {
//     label: 'Дата народження',
//     name: 'birthday',
//   },
//   {
//     label: 'Поточне становище',
//     name: 'current-situation',
//   },
//
//   {
//     label: 'Робота',
//     name: 'work',
//   },
//
//   {
//     label: 'Статус',
//     name: 'status',
//   },
//   {
//     label: 'Курс',
//     name: 'course',
//   },
//   {
//     label: 'Пароль',
//     name: 'password',
//   },
//   {
//     label: 'Повтор пароля',
//     name: 'repeat-password',
//   },
// ]
//
const dashboardUserInfo: string[] = [
  'Ім`я:',
  'По батькові:',
  'Прізвище:',
  'Телеграм:',
  'Телефон:',
  'Email:',
]
</script>

<style lang="scss">
@import './styles';
</style>
