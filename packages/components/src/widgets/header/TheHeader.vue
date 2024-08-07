<template>
  <header class="header">
    <div class="container">
      <div class="header__content">
        <div class="header__user">
          <div class="header__user-avatar">
            <template v-if="!isMobile">
              <router-link to="/dashboard">
                <BaseImage v-if="user.image" :src="user.image" alt="avatar" />
                <div v-else class="header__user-avatar-placeholder">
                  {{ getInitials(user.name) }}
                </div>
              </router-link>
            </template>

            <template v-if="isMobile">
              <BaseImage
                v-if="user.image"
                @click="handleToggle"
                :src="user.image"
                alt="avatar"
              />
              <div
                v-else
                class="header__user-avatar-placeholder"
                @click="handleToggle"
              >
                {{ getInitials(user.name) }}
              </div>
            </template>
          </div>

          <div
            class="header__user-column"
            :class="{ 'header__user-column_active': isToggle }"
          >
            <div class="header__user-row">
              <BaseCheckbox
                type="switch"
                name="switch"
                id="switch"
                :checked="isChecked"
                @change="handleCheckboxChange"
              />

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
  BaseImage,
  useResize,
  BaseButton,
  useToggle,
  BaseCheckbox,
} from '@/shared'
import { ref } from 'vue'
import { ManagerDtoForCard } from '@spacelablms/admin/src/shared'

defineProps<{
  user: ManagerDtoForCard
  pages?: Array<{ name: string; href: string }>
  isChecked: boolean
}>()

const emit = defineEmits(['changeTheme', 'updateIsChecked'])

const isMobile = ref(window.innerWidth <= 575)
const isToggle = ref(false)

const handleToggle = useToggle(isToggle)
const handleResize = () => {
  isMobile.value = window.innerWidth <= 575
}

const handleCheckboxChange = (event: Event) => {
  const target = event.target

  if (target instanceof HTMLInputElement) {
    emit('updateIsChecked', target.checked)
  }
}

const getInitials = (name: string) => {
  if (!name) return ''
  const parts = name.split(' ')
  if (parts.length < 2) return parts[0].charAt(0)
  return `${parts[0].charAt(0)}${parts[1].charAt(0)}`
}

useResize(handleResize)
</script>

<style lang="scss">
@import 'TheHeader';
</style>
