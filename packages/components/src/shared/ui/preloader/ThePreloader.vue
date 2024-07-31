<script setup lang="ts">
const text = 'LLoading...'
const rings = 2
const ringSectors = 30
</script>

<template>
  <div class="preloader-item">
    <div class="preloader">
      <div v-for="r in rings" :key="r" class="preloader__ring">
        <div v-for="s in ringSectors" :key="s" class="preloader__sector">
          {{ text[s] || '' }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'ThePreloader';
</style>
