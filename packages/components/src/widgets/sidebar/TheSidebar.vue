<template>
  <aside class="sidebar" :class="{ 'sidebar_act': isToggle || props.isOpen }">
    <div class="sidebar__content">
      <div class="sidebar__logo">
        <router-link to="/" class="sidebar__logo-link">
          {{ isToggle ? 'S' : 'SpaceLabLMS' }}
        </router-link>
      </div>

      <hr class="sidebar__line" />

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

      <div class="sidebar__arrow" @click="toggleSideBar">
        <!--        <BaseIcon icon="arrow-left" />-->
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
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
const toggleSideBar = useToggle(isToggle)
</script>

<style lang="scss">
@import 'styles';
</style>
