<template>
  <div class="wrapper" :data-theme="isTheme ? 'dark' : 'light'">
    <MainLayout v-if="isDefaultLayout">
      <template #header>
        <TheHeader
          :user="headerInfo"
          :isChecked="isTheme"
          @updateIsChecked="handleUpdateIsChecked"
        />
      </template>

      <template #sidebar>
        <TheSidebar :data="pages" />
      </template>
    </MainLayout>

    <EmptyLayout v-else></EmptyLayout>

    <SvgManager />
  </div>
</template>

<script setup lang="ts">
import { MainLayout, EmptyLayout } from '@/shared/layouts'
import { computed, onMounted, provide, ref } from 'vue'
import { useRoute } from 'vue-router'
import { AppPages, AppRoutes, EAppProviders } from './providers'
import { SvgManager, TheHeader, TheSidebar } from '@spacelablms/components'
import { getPages, headerInfo, pages, getTheme } from '@/entities'
import { changeTheme } from '@/features'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()
const isTheme = ref(false)

const fetchTheme = async () => {
  isTheme.value = await getTheme()
}

const handleUpdateIsChecked = async (checked: boolean) => {
  isTheme.value = checked
  await changeTheme(isTheme.value)
}

const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')

const fetchData = async () => {
  await getPages()
  await fetchTheme()
}

onMounted(fetchData)
</script>
