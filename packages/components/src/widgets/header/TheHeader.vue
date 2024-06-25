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
              <BaseImage :srcset="logo.webp" :src="logo.img" alt="logo" />
            </router-link>
          </div>
        </div>

        <div class="header__user" v-if="!isMobile">
          <div class="header__user-avatar">
            <router-link to="/dashboard" v-if="userAvatar">
              <BaseImage :src="userAvatar" alt="avatar" />
            </router-link>
          </div>

          <div class="header__user-column">
            <p class="header__user-name">{{ userName }}</p>
            <p class="header__user-name" v-if="userRole">{{ userRole }}</p>
          </div>

          <BaseSwitch @theme="xx" />
        </div>

        <div class="header__user" v-if="isMobile">
          <!--          <div class="header__user-arrow" v-if="isMobile">-->
          <!--            <BaseIcon icon="arrow-down" />-->
          <!--          </div>-->

          <div class="header__user-avatar" v-if="userAvatar">
            <BaseImage :src="userAvatar" alt="avatar" @click="openInfoUser" />
          </div>

          <div
            class="header__user-mob"
            :class="{ 'header__user-mob_act': isOpenInfoUser }"
          >
            <div class="header__user-switch">
              <BaseSwitch @theme="xx" />

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
              <!--              <p class="header__user-name">{{ userName }}</p>-->
              <!--              <p class="header__user-name" v-if="userRole">{{ userRole }}</p>-->
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
  BaseImage,
  useFetchData,
  BaseSwitch,
} from '@/shared'
import { onMounted, ref } from 'vue'
import { PersonalAreaControllerApi } from '@spacelablms/student/src/shared/api'

const isOpenSidebar = ref(false)
const isOpenInfoUser = ref(false)
const isMobile = ref(window.innerWidth <= 767)
const userData = ref()
const userName = ref<string | null>(null)
const userAvatar = ref<string | null>(null)
const userRole = ref<string | null>(null)
const emits = defineEmits(['toggle-sidebar', 'test'])

const openInfoUser = useToggle(isOpenInfoUser)
const toggleSidebar = useToggle(isOpenSidebar)
const toggleMobileSideBar = () => {
  toggleSidebar()
  emits('toggle-sidebar')
}

const xx = () => {
  emits('test')
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}
async function getInfoStudent() {
  try {
    userData.value = await useFetchData(
      PersonalAreaControllerApi,
      'getPersonalData'
    )

    if (userData.value.data) {
      userName.value = userData.value.data.contact.name
      userAvatar.value = userData.value.data.image
      userRole.value = userData.value.data.currentSituation
    }
  } catch (error) {
    console.error('data', error)
  }
}

useResize(handleResize)

onMounted(async () => {
  await getInfoStudent()
})

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

const logo = {
  webp: new URL('../../shared/assets/img/logo.webp', import.meta.url),
  img: new URL('../../shared/assets/img/logo.png', import.meta.url),
}
</script>

<style lang="scss">
@import 'TheHeader';
</style>
