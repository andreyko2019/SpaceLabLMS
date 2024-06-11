<template>
  <aside class="sidebar" :class="{ 'sidebar_act': isToggle || props.isOpen }">
    <div class="sidebar__content">
      <div class="sidebar__logo" v-if="!isMobile">
        <router-link to="/" class="sidebar__logo-link">
          {{ isToggle ? 'S' : 'SpaceLabLMS' }}
        </router-link>
      </div>

      <hr class="sidebar__line" v-if="!isMobile" />

      <ul class="sidebar__list">
        <li
          class="sidebar__list-item"
          v-for="(item, index) in props.data"
          :key="index"
        >
          <router-link :to="item.href" class="sidebar__list-link">
            <div class="sidebar__list-icon">
<!--              <BaseIcon :icon="item.icon" />-->
            </div>

            <span class="sidebar__list-text" v-show="!isToggle">
              {{ item.name }}
            </span>
          </router-link>
        </li>
      </ul>

      <div class="sidebar__arrow" @click="toggleSideBar" v-if="!isMobile">
<!--        <BaseIcon icon="arrow-left" />-->
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, Ref, ref } from 'vue'
// import { BaseIcon } from '@/shared'
import { useToggle } from '@/shared'

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

const isToggle: Ref<boolean> = ref(false)
const isMobile = ref(window.innerWidth <= 767)

const toggleSideBar = () => {
  useToggle(isToggle)
}

const handleResize = () => {
  isMobile.value = window.innerWidth <= 767
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style lang="scss">
@import 'styles';
</style>
