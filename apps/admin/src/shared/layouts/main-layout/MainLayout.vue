<script setup lang="ts"></script>

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

<style lang="scss"></style>
