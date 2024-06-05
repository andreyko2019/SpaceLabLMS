<template>
  <MainLayout v-if="isMainLayout">
    <template #header>
      <TheHeader />
    </template>

    <template #sidebar>
      <TheSidebar />
    </template>

    <template #footer>
      <TheFooter />
    </template>
  </MainLayout>

  <EmptyLayout v-else></EmptyLayout>
</template>

<script setup lang="ts">
import { TheHeader, TheFooter, TheSidebar } from '@/widgets'
import { EmptyLayout, MainLayout } from '@/shared/ui/layouts'
import { computed, provide } from 'vue'
import { EAppProviders, AppRoutes } from './providers'
import { AppPages } from './providers/router'
import { useRoute } from 'vue-router'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()

const isMainLayout = computed(() => route.meta.layout === 'MainLayout')
</script>
