<template>
  <div class="app-bg" />
  <MainLayout>
    <template v-slot:header>
      <TheHeader />
    </template>

    <template v-slot:footer>
      <TheFooter />
    </template>
  </MainLayout>
</template>

<script setup lang="ts">
import './styles/index.scss'

import { TheHeader } from '@/widgets/TheHeader'
import { TheFooter } from '@/widgets/TheFooter'
import { MainLayout, EmptyLayout } from '@/shared/ui/layouts'

import { provide } from 'vue'
import { EAppProviders, AppRoutes } from './providers'
import { AppPages } from './providers/router'

provide(EAppProviders.AppRoutes, AppRoutes)
provide(EAppProviders.AppPages, AppPages)


// const isEmptyLayout = computed(() => route.meta.layout === 'empty')

</script>
