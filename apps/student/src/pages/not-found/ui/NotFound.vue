<template>
  <div>Not found page</div>
  <div>go to home</div>
  <router-link :to="appRoutes.getMain()">Home</router-link>
</template>

<script setup lang="ts">
import { useAppRoutes } from '@/app/providers'

const appRoutes = useAppRoutes()
</script>

<style lang="scss">
@import './styles';
</style>
