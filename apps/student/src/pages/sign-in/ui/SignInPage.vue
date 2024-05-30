<template>
  <div class="sign-in-page">
    <h1 class="sign-in-page__title">Sign In</h1>

    <SignInForm class="sign-in-page__form" />
  </div>
</template>

<script setup lang="ts">
import { SignInForm } from '@/features/auth'
</script>

<style lang="scss">
@import './styles';
</style>
