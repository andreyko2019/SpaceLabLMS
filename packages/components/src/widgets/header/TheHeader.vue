<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__user">
          <div class="header__user-avatar">
            <template v-if="!isMobile">
              <router-link to="/dashboard">
                <BaseImage :src="user.image" alt="avatar" />
              </router-link>
            </template>

            <template v-if="isMobile">
              <BaseImage @click="handleToggle" :src="user.image" alt="avatar" />
            </template>
          </div>

          <div
            class="header__user-column"
            :class="{ 'header__user-column_active': isToggle }"
          >
            <div class="header__user-row">
              <BaseSwitch @theme="switchTheme" :val="theme" />

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
                v-for="(page, index) in pages"
                :key="index"
                :to="page.href"
                @click="handleToggle"
              >
                {{ page.name }}
              </router-link>
            </template>

            <hr class="header__user-line" v-if="isMobile" />

            <div class="header__user-row">
              <p class="header__user-name">{{ user.name }}</p>
              <p
                class="header__user-name"
                v-if="user.userStatus || user.userRole"
              >
                {{ user.userStatus || user.userRole }}
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
import { PropType, ref } from 'vue'

defineProps({
  user: {
    type: Object,
    required: true,
  },

  theme: {
    type: Boolean,
    required: true,
  },
  pages: {
    type: Object,
    required: true,
  },

  switchTheme: {
    type: Function as PropType<() => void>,
    required: true,
  },
})

const isMobile = ref(window.innerWidth <= 575)
const isToggle = ref(false)
const handleToggle = useToggle(isToggle)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 575
}

useResize(handleResize)
</script>

<style lang="scss">
@import 'TheHeader';
</style>
