<template>
  <section class="dashboard">
    <div class="container">
      <UserInfo />
      <ChangeStudentInfo />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ChangeStudentInfo } from '@/features'
import { UserInfo } from '@/entities'
</script>

<style lang="scss">
@import './styles';
</style>
