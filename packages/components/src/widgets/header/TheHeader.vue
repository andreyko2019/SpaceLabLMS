<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__user">
          <div class="header__user-avatar">
            <template v-if="!isMobile">
              <router-link to="/dashboard">
                <BaseImage :src="user.userImage" alt="avatar" />
              </router-link>
            </template>

            <template v-if="isMobile">
              <BaseImage
                @click="handleToggle"
                :src="user.userImage"
                alt="avatar"
              />
            </template>
          </div>

          <div
            class="header__user-column"
            :class="{ 'header__user-column_active': isToggle }"
          >
            <div class="header__user-row">
              <BaseSwitch @theme="changeTheme" :val="false" />

              <BaseButton
                v-if="isMobile"
                class="header__user-btn"
                type="button"
                text="Вийти"
              />
            </div>

            <hr class="header__user-line" v-if="isMobile" />

            <template v-if="isMobile">
              <router-link
                class="header__user-link"
                v-for="(page, index) in namePage"
                :key="index"
                :to="page.href"
                @click="handleToggle"
              >
                {{ page.name }}
              </router-link>
            </template>

            <hr class="header__user-line" v-if="isMobile" />

            <div class="header__user-row">
              <p class="header__user-name">{{ user.userName }}</p>
              <p class="header__user-name" v-if="user.userStatus">
                {{ user.userStatus }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  BaseImage,
  BaseSwitch,
  // IConfig,
  // useGetCookie,
  // useCreateConfig,
  useResize,
  BaseButton,
  useToggle,
} from '@/shared'

import { onMounted, reactive, ref } from 'vue'
// import { AxiosResponse } from 'axios'

interface INamePage {
  href: string
  name: string
}
interface IUser {
  userName: string | null
  userStatus: string | null
  userImage: string | null
}

const user: IUser = reactive({
  userName: null,
  userStatus: null,
  userImage: null,
})

const isMobile = ref(window.innerWidth <= 575)
const isToggle = ref(false)
const namePage: Array<INamePage> = [
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
  {
    href: 'dashboard',
    name: 'Особистий Кабінет',
  },
]

const handleToggle = useToggle(isToggle)
// const authToken = useGetCookie('student-access-token')
// const themeStore = useCounterStore()
// setTimeout(() => {
//   const themeStore = stateVideo()
//   console.log(themeStore)
// }, 1000)

const handleResize = () => {
  isMobile.value = window.innerWidth <= 575
}

// async function getHeaderData(config: IConfig) {
//   const api = useApi(PersonalAreaControllerApi)
//
//   const data: AxiosResponse = await api.getPersonalData(config)
//
//   if (data.data) {
//     user.userName = data.data.contact.name
//     user.userStatus = data.data.status
//     user.userImage = data.data.image
//   }
// }

// async function putTheme(config: IConfig) {
//   const api = useApi(PersonalAreaControllerApi)
//
//   await api.changeTheme({ theme: !themeStore.isTheme }, config)
// }

// async function getTheme(config: IConfig) {
//   const api = useApi(PersonalAreaControllerApi)
//
//   const dataTheme = await api.getTheme(config)
// }

async function changeTheme() {
  // const config = useCreateConfig(authToken)
  // themeStore.toggleTheme()
  // await putTheme(config)
}

async function fetchHeaderAndTheme() {
  // const config = useCreateConfig(authToken)
  // await getHeaderData(config)
  // await getTheme(config)
}

useResize(handleResize)
onMounted(async () => {
  await fetchHeaderAndTheme()
})
</script>

<style lang="scss">
@import 'TheHeader';
</style>
