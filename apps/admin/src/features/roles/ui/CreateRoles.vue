<script setup lang="ts">
import {
  BaseInput,
  BaseButton,
  TheModal,
  BaseForm,
  useToggle,
} from '@spacelablms/components'
import { roleData } from '@/features'

const { isModalAdd, roleNameInp } = roleData()

const openAddRole = useToggle(isModalAdd)
const closeAddRole = useToggle(isModalAdd)

async function addRoleOnSubmit() {}
</script>

<template>
  <div class="create-role">
    <h1 class="create-role__title">Ролі</h1>

    <div class="create-role__row">
      <div class="create-role__search">
        <BaseInput />
      </div>

      <div class="create-role__add">
        <BaseButton
          modify="primary"
          text="Додати роль"
          @click="openAddRole"
        ></BaseButton>
      </div>
    </div>

    <TheModal v-if="isModalAdd" @close="closeAddRole" title="Додати роль">
      <BaseForm @send="addRoleOnSubmit">
        <BaseInput
          v-for="(inp, index) in roleNameInp"
          :key="index"
          :label="inp.label"
          :name="inp.name"
        />
      </BaseForm>
    </TheModal>
  </div>
</template>

<style scoped lang="scss"></style>
