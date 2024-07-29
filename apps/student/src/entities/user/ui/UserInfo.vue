<script setup lang="ts">
import { BaseButton } from '@spacelablms/components'

const userInfo: string[] = [
  "Ім'я",
  'По батькові',
  'Прізвище',
  'Телефон',
  'Email',
  'Telegram',
]
</script>

<template>
  <div class="user">
    <div class="user__avatar">
      <!--      <BaseImage />-->

      <BaseButton
        class="user__delete"
        type="button"
        text="Видалити фотографію"
      />
    </div>

    <div class="user__info">
      <div class="user__info-data">
        <p
          class="user__info-txt"
          v-for="(info, index) in userInfo"
          :key="index"
        >
          {{ info }}
        </p>
      </div>

      <div class="user__info-data">
        <p class="user__info-txt"></p>
        <a class="user__info-link"></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss"></style>
