<template>
  <slot name="header" />
  <slot name="sidebar" />

  <main class="main">
    <article class="page">
      <router-view />
    </article>
  </main>
  <slot name="footer" />
  <slot />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import './styles';
</style>
