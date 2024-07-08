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
  BaseSwitch,
  BaseImage,
  useResize,
  BaseButton,
  useToggle,
} from '@/shared'
// BaseSwitch,
import { onMounted, reactive, ref } from 'vue'
// import {
//   PersonalAreaControllerApi,
//   useApi,
// } from '@spacelablms/student/src/shared/api'
// import { isTheme } from '@spacelablms/student/src/entities/theme'

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
const handleResize = () => {
  isMobile.value = window.innerWidth <= 575
}

const changeTheme = () => {}

// interface MyObject {
//   name: string
//   lastName: string
//   middleName: string
//   telegram: string
//   telephone: string
//   email: string
//   work: string
//   image: string
// }

// async function testing() {
//   const api = useApi(PersonalAreaControllerApi)
//   const { data } = await api.getPersonalData()
//
//   console.log(data.name)
// }
// await testing()
useResize(handleResize)

onMounted(async () => {})
</script>

<style lang="scss">
@import 'TheHeader';
</style>
