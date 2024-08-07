<script setup lang="ts">
import {
  BaseInput,
  BaseButton,
  BaseIcon,
  TheTable,
  BaseCheckbox,
} from '@spacelablms/components'
import { getAllRole, rolesTd, rolesTh } from '@/entities'
import { onMounted, ref } from 'vue'

const isTheme = ref(false)

onMounted(getAllRole)
</script>

<template>
  <div class="role">
    <div class="role__title">Ролі</div>

    <div class="role__row">
      <div class="role__search">
        <div class="role__search__inp">
          <BaseInput placeholder="Пошук" />
        </div>

        <div class="role__search-btn">
          <BaseButton modify="primary" text="Пошук">
            <BaseIcon icon="search" />
          </BaseButton>
        </div>
      </div>

      <div class="role__add-role">
        <router-link to="/role-add">Додати роль</router-link>
      </div>
    </div>

    <div class="role__table">
      <TheTable :th="rolesTh" :td="rolesTd" />
    </div>

    <BaseCheckbox
      type="switch"
      id="theme"
      name="theme"
      v-model:checked="isTheme"
    />
  </div>
</template>

<style lang="scss">
@import 'Role';
</style>
