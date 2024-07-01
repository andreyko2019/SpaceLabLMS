<template>
  <div class="wrapper" :data-theme="isTheme.theme ? 'dark' : 'light'">
    <MainLayout v-if="isDefaultLayout">
      <template #header>
        <TheHeader />
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
  IConfig,
  SvgManager,
  TheFooter,
  TheHeader,
  TheSidebar,
  useCreateConfig,
  useGetCookie,
} from '@spacelablms/components'
import { EmptyLayout, MainLayout } from '@/shared/ui/layouts'
import { computed, onMounted, provide, Ref, ref } from 'vue'
import { AppRoutes, EAppProviders } from './providers'
import { AppPages } from './providers/router'
import { useRoute } from 'vue-router'
import {
  PersonalAreaControllerApi,
  PersonalAreaControllerApiChangeThemeRequest,
  useApi,
} from '@/shared/api'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()
const isTheme: Ref<PersonalAreaControllerApiChangeThemeRequest> = ref({
  theme: true,
})

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
const authToken = useGetCookie('student-access-token')
const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')
async function getTheme(config: IConfig) {
  const apiTheme = useApi(PersonalAreaControllerApi)

  const dataTheme = await apiTheme.getTheme(config)
  if (dataTheme.data) isTheme.value.theme = dataTheme.data
}

onMounted(async () => {
  const config = useCreateConfig(authToken)
  await getTheme(config)
})
</script>
