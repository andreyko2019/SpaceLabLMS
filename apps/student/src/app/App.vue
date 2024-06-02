<template>
  <div class="app-bg" />
  <EmptyLayout v-if="isEmptyLayout"></EmptyLayout>

  <MainLayout v-else>
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
</template>

<script setup lang="ts">
import './styles/index.scss'

import { TheHeader, TheFooter, TheSidebar } from '@/widgets'
import { EmptyLayout, MainLayout } from '@/shared/ui/layouts'
import { computed, provide } from 'vue'
import { EAppProviders, AppRoutes } from './providers'
import { AppPages } from './providers/router'
import { useRoute } from 'vue-router'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)

const route = useRoute()

const isEmptyLayout = computed(() => route.meta.layout === 'EmptyLayout')
</script>
