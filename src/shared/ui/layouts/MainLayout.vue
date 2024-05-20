<template>
  <slot name="header" />
  <main>
    <aside>
      <slot name="sidebar" />
    </aside>
    <article>
      <router-view />
    </article>
  </main>
  <slot name="footer" />
  <slot />
</template>
<script setup lang="ts">
</script>
