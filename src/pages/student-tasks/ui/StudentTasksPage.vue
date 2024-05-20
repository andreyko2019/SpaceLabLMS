<template>
    <div>Student tasks page
    <router-view/>
    </div>
</template>

<script setup lang="ts">
import { useAppRoutes } from '@/app/providers'

const appRoutes = useAppRoutes()
</script>

<style lang="scss">
@import './styles';
</style>
