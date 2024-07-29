<template>
  <div class="wrapper" :data-theme="isTheme ? 'dark' : 'light'">
    <MainLayout v-if="isDefaultLayout">
      <!--      <template #header>-->
      <!--        <TheHeader-->
      <!--          :user="userInfo"-->
      <!--          :theme="isTheme.theme"-->
      <!--          :pages="namePage"-->
      <!--          :switch-theme="tests"-->
      <!--        />-->
      <!--      </template>-->

      <template #sidebar>
        <TheSidebar :data="pages" />
      </template>

      <!--      <template #footer>-->
      <!--        <TheFooter />-->
      <!--      </template>-->
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
import { SvgManager, TheSidebar } from '@spacelablms/components'
import { getPages, pages } from '@/entities'

// TheSidebar
provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()
const isTheme = ref(false)
const isDefaultLayout = computed(() => route.meta.layout === 'DefaultLayout')

onMounted(getPages)
</script>
