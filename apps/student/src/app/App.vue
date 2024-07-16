<template>
  <div class="wrapper" :data-theme="isTheme.theme ? 'dark' : 'light'">
    <MainLayout v-if="isDefaultLayout">
      <template #header>
        <TheHeader
          :user="userInfo"
          :theme="isTheme.theme"
          :pages="namePage"
          :switch-theme="tests"
        />
      </template>

      <template #sidebar>
        <TheSidebar :data="sideBarStudent" />
      </template>

      <template #footer>
        <TheFooter />
      </template>
    </MainLayout>

    <EmptyLayout v-else></EmptyLayout>
    <SvgManager />
  </div>
</template>
<script setup lang="ts">
import {
  SvgManager,
  TheFooter,
  TheHeader,
  TheSidebar,
} from '@spacelablms/components'
import { EmptyLayout, MainLayout } from '@/shared/ui/layouts'
import { computed, onMounted, provide } from 'vue'
import { AppRoutes, EAppProviders } from './providers'
import { AppPages } from './providers/router'
import { useRoute } from 'vue-router'
import { isTheme } from '@/entities/theme/model/isTheme'
// import { getStudentTheme } from '@/entities/theme'
import { namePage, tests, userInfo, getUserInfo } from '@/entities'

//

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()

const sideBarStudent = [
  {
    icon: 'statistic',
    href: 'statistics',
    name: 'Статистика',
  },
  {
    icon: 'lessons',
    href: 'lessons',
    name: 'Заняття',
  },
  {
    icon: 'task',
    href: 'tasks',
    name: 'Завдання',
  },
  {
    icon: 'literature',
    href: 'literature',
    name: 'Література',
  },
]

const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')
onMounted(getUserInfo)
</script>
