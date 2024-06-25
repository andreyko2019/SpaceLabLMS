<template>
  <aside class="aside" :class="{ 'aside_wrap': isToggle || props.isOpen }">
    <div class="aside__logo" v-if="!isMobile">
      <router-link to="/">
        <BaseImage :srcset="logo.webp" :src="logo.img" alt="logo" />
      </router-link>
    </div>

    <div class="aside__menu">
      <nav class="aside__menu-nav">
        <router-link
          v-for="(link, index) in props.data"
          :key="index"
          :to="link.href"
          class="aside__menu-link"
          @click="closeSidebar"
        >
          <BaseIcon :icon="link.icon" />
          <span class="aside__menu-span">{{ link.name }}</span>
        </router-link>
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
import { BaseIcon, BaseImage, useResize } from '@/shared'
const isMobile = ref(window.innerWidth <= 767)
const emit = defineEmits(['close'])
interface ISidebar {
  href: string
  icon: string
  name: string
}

const props = defineProps({
  data: {
    type: Array<ISidebar>,
    required: true,
  },
  isOpen: {
    type: Boolean,
    required: true,
  },
})

const isToggle = ref(localStorage.getItem('aside_wrap') === 'true')

const toggleSideBar = () => {
  isToggle.value = !isToggle.value
  localStorage.setItem('aside_wrap', isToggle.value.toString())
}

const closeSidebar = () => {
  emit('close')
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}

useResize(handleResize)

const logo = {
  webp: new URL('../../shared/assets/img/logo.webp', import.meta.url),
  img: new URL('../../shared/assets/img/logo.png', import.meta.url),
}
</script>

<style lang="scss">
@import 'TheSidebar';
</style>
