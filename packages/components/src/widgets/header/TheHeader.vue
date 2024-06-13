<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__item" v-if="isMobile">
          <div
            class="header__icon"
            :class="{ 'header__icon_act': isOpenSidebar }"
            @click="toggleMobileSideBar"
          >
            <span></span>
          </div>

          <div class="header__logo">
            <router-link to="/" class="header__logo-link">
              SpaceLabLMS
            </router-link>
          </div>
        </div>

        <div class="header__user" v-if="!isMobile">
          <div class="header__user-avatar">
            <router-link to="/dashboard">
              <BaseImage :src="userAvatar" alt="avatar" />
            </router-link>
          </div>

          <div class="header__user-column">
            <p class="header__user-name">{{ userName }}</p>
            <p class="header__user-name" v-if="userRole">{{ userRole }}</p>
          </div>

          <div class="header__user-switch">
            <label class="header__user-label">
              <input class="header__user-inp" type="checkbox" id="slider" />
              <span class="header__user-slider round"></span>
            </label>
          </div>
        </div>

        <div class="header__user" v-if="isMobile">
          <!--          <div class="header__user-arrow" v-if="isMobile">-->
          <!--            <BaseIcon icon="arrow-down" />-->
          <!--          </div>-->

          <div class="header__user-avatar">
            <BaseImage :src="userAvatar" alt="avatar" @click="openInfoUser" />
          </div>

          <div
            class="header__user-mob"
            :class="{ 'header__user-mob_act': isOpenInfoUser }"
          >
            <div class="header__user-switch">
              <label class="header__user-label">
                <input class="header__user-inp" type="checkbox" id="slider" />
                <span class="header__user-slider round"></span>
              </label>

              <button class="header__user-logout">Вийти</button>
            </div>

            <hr class="header__user-line" />

            <ul class="header__user-list">
              <li
                class="header__user-item"
                v-for="(link, index) in namePage"
                :key="index"
              >
                <router-link class="header__user-link" :to="link.href">{{
                  link.name
                }}</router-link>
              </li>
            </ul>

            <hr class="header__user-line" />

            <div class="header__user-column">
              <p class="header__user-name">{{ userName }}</p>
              <p class="header__user-name" v-if="userRole">{{ userRole }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import {
  useToggle,
  useResize,
  userAvatar,
  userName,
  userRole,
  getUserData,
  BaseImage,
} from '@/shared'
import { ref } from 'vue'

const isOpenSidebar = ref(false)
const isOpenInfoUser = ref(false)
const isMobile = ref(window.innerWidth <= 767)
const emits = defineEmits(['toggle-sidebar', 'theme'])

// const themeApi = useApi(PersonalAreaControllerApi)

// async function changeTheme(theme: boolean) {
//   try {
//     const authToken =  useGetCookie('student-access-token')
//
//     const config = {
//       headers: {
//         Authorization: `Bearer ${authToken}`,
//       },
//     }
//
//
//     const response = await themeApi.changeTheme({ theme } , config)
//
//     console.log(response);
//   } catch (error) {
//     console.error('Error getting user data:', error)
//   }
// }
const toggleSidebar = useToggle(isOpenSidebar)
const toggleMobileSideBar = () => {
  toggleSidebar()
  emits('toggle-sidebar')
}

const openInfoUser = useToggle(isOpenInfoUser)

// const switchTheme = () => {
//   // changeTheme(true)
//   emits('theme')
//   isTheme.value = !isTheme.value
//   console.log();
// }

const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}

useResize(handleResize)
getUserData()
interface INamePage {
  href: string
  name: string
}

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
</script>

<style lang="scss">
@import 'styles';
</style>
