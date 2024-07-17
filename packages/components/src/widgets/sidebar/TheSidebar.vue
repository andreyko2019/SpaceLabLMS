<template>
  <aside class="aside" :class="{ 'aside_wrap': isToggle || isToggleMobile }">
    <div class="aside__logo">
      <div
        class="aside__logo-icon"
        :class="{ 'aside__logo-icon_active': isToggleMobile }"
        @click="toggleSideBarMobile"
        v-if="isMobile"
      >
        <span></span>
      </div>

      <router-link to="/" class="aside__logo-link">
        {{ isToggle ? 'S' : 'SpaceLabLMS' }}
      </router-link>
    </div>

    <div class="aside__menu">
      <nav class="aside__menu-nav">
        <template v-if="!isMobile">
          <router-link
            v-for="(link, index) in props.data"
            :key="index"
            :to="link.href"
            class="aside__menu-link"
          >
            <BaseIcon :icon="link.icon" />
            <span class="aside__menu-span">{{ link.name }}</span>
          </router-link>
        </template>

        <template v-else>
          <router-link
            v-for="(link, index) in props.data"
            :key="index"
            :to="link.href"
            class="aside__menu-link"
            @click="toggleSideBarMobile"
          >
            <BaseIcon :icon="link.icon" />
            <span class="aside__menu-span">{{ link.name }}</span>
          </router-link>
        </template>
      </nav>
    </div>

    <div class="aside__flex"></div>

    <div
      class="aside__wrap"
      :class="{ 'aside__wrap_rotate': isToggle }"
      @click="toggleSideBar"
      v-if="!isMobile"
    >
      <BaseIcon icon="arrow-left" />
    </div>
  </aside>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { BaseIcon, useResize, useToggle } from '@/shared'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
})

const isMobile = ref(window.innerWidth <= 1023)
const isToggle = ref(localStorage.getItem('aside_wrap') === 'true')
const isToggleMobile = ref(false)

const toggleSideBar = () => {
  isToggle.value = !isToggle.value
  localStorage.setItem('aside_wrap', isToggle.value.toString())
}

const toggleSideBarMobile = useToggle(isToggleMobile)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}

useResize(handleResize)
</script>

<style lang="scss">
@import 'TheSidebar';
</style>
