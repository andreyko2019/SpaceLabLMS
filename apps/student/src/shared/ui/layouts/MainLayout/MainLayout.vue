<template>
  <slot name="header" />
  <main class="main">
    <aside>
      <slot name="sidebar" />
    </aside>
    <article class="page">
      <router-view />
    </article>
  </main>
  <slot name="footer" />
  <slot />
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import "./styles";
</style>
