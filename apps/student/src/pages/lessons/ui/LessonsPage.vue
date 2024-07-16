<template>
  <section class="lessons">
    <div class="container">
      <h1 class="lessons__title">Заняття</h1>

      <Lessons />
    </div>
  </section>
</template>

<script setup lang="ts">
import { Lessons } from '@/entities/lessons'
</script>

<style lang="scss">
@import './styles';
</style>
