<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__logo">
          <router-link to="/" class="sidebar__logo-link"
            >SpaceLabLMS
          </router-link>
        </div>

        <div
          class="header__icon"
          :class="{ 'header__icon_act': isOpenSidebar }"
          @click="toggleMobileSideBar"
        >
          <span></span>
        </div>

        <div class="header__user">
          <!--                <div class="header__user-switch">-->
          <!--                  <label class="header__user-label">-->
          <!--                    <input class="header__user-inp" type="checkbox" id="slider" />-->
          <!--                    <span-->
          <!--                      class="header__user-slider round"-->
          <!--                      @click="switchTheme"-->
          <!--                    ></span>-->
          <!--                  </label>-->
          <!--                </div>-->

          <div class="header__user-column">
            <!--                  <p class="header__user-name">{{ userName }}</p>-->
            <!--                  <p class="header__user-name">{{ userRole }}</p>-->
          </div>

          <div class="header__user-avatar">
            <!--                  <router-link to="/dashboard">-->
            <!--                    <BaseImage :src="userAvatar" alt="avatar" />-->
            <!--                  </router-link>-->
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useToggle } from '@/shared'
import { ref } from 'vue'

const isOpenSidebar = ref(false)
const emits = defineEmits(['toggle-sidebar'])

// const toggleMobileSideBar = useToggle(isOpenSidebar)

const toggleMobileSideBar = () => {
  useToggle(isOpenSidebar)
  emits('toggle-sidebar')
}

// import { BaseImage } from '@/shared'
// import { userName, userRole, userAvatar, getUserData } from '@spacelablms/student/src/shared/lib/use/useGetUser/useGetUserData'
//
// getUserData()
//
// const emit = defineEmits(['switch-theme'])
// const switchTheme = () => {
//   emit('switch-theme')
// }
</script>

<style lang="scss">
@import 'styles';
</style>
