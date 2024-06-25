<template>
  <div class="wrapper" :data-theme="getIsTheme ? 'dark' : 'light'">
    <MainLayout>
      <template #header>
        <TheHeader @toggle-sidebar="handleToggleSidebar" @test="xx" />
      </template>

      <template #sidebar>
        <TheSidebar
          :data="sideBarStudent"
          :is-open="sidebar"
          @close="handleToggleSidebar"
        />
      </template>

      <template #footer>
        <TheFooter />
      </template>
    </MainLayout>

    <!--    <EmptyLayout v-else></EmptyLayout>-->
    <SvgManager />
  </div>
</template>

<script setup lang="ts">
import {
  SvgManager,
  TheFooter,
  TheHeader,
  TheSidebar,
  // useFetchData,
} from '@spacelablms/components'
import { MainLayout } from '@/shared/ui/layouts'
import { onMounted, provide, ref } from 'vue'
import { AppRoutes, EAppProviders } from './providers'
import { AppPages } from './providers/router'
// import { useRoute } from 'vue-router'
// import { PersonalAreaControllerApi } from '@/shared/api'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

// const route = useRoute()
// v-if="isDefaultLayout"
// const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')
const sidebar = ref(false)
// const isTheme = ref(false)
// const getThemeData = ref()
const getIsTheme = ref(false)
// const test = ref(true)

interface ISideBar {
  icon: string
  href: string
  name: string
}

const handleToggleSidebar = () => {
  sidebar.value = !sidebar.value
}

const xx = () => {
  console.log(123)
}

// async function switchTheme() {
//   try {
//     const newTheme = !isTheme.value
//     await useFetchData(PersonalAreaControllerApi, 'changeTheme', {
//       theme: newTheme,
//     })
//     isTheme.value = newTheme
//     console.log(isTheme.value)
//   } catch (error) {
//     console.error(error)
//   }
// }

// async function getTheme() {
//   try {
//     getThemeData.value = await useFetchData(
//       PersonalAreaControllerApi,
//       'getTheme'
//     )
//
//     if (getThemeData.value.data) {
//       getIsTheme.value = getThemeData.value.data
//       console.log(getIsTheme.value)
//     }
//   } catch (error) {
//     console.error(error)
//   }
// }

onMounted(async () => {
  // await getTheme()
})

const sideBarStudent: ISideBar[] = [
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
</script>
