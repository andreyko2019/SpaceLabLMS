<script setup lang="ts">
import {
  BaseIcon,
  BaseForm,
  BaseInput,
  BaseButton,
  BaseCheckbox,
} from '@spacelablms/components'
import {
  editContactInp,
  editContactLinks,
  isDisplay,
} from '@/features/contact/contact-edit/config'
import { useValidEditContactForm } from '@/features'

const editContactForm = useValidEditContactForm()

async function onSubmit() {
  const { valid } = await editContactForm.instance.validate()

  if (!valid) return
}
</script>

<template>
  <div class="edit-contact">
    <h1 class="edit-contact__title">Редагувати контакт</h1>

    <div class="edit-contact__links">
      <router-link
        class="edit-contact__links-item"
        v-for="(link, index) in editContactLinks"
        :key="index"
        :to="link.href"
        :class="{ 'edit-contact__links-item_act': !link.icon }"
      >
        {{ link.name }}

        <span v-if="link.icon">
          <BaseIcon :icon="link.icon" />
        </span>
      </router-link>
    </div>

    <BaseForm @send="onSubmit">
      <div class="edit-contact__form">
        <BaseInput
          v-for="(inp, index) in editContactInp"
          :key="index"
          :label="inp.label"
          :name="inp.name"
          :placeholder="inp.label"
        />
      </div>
      <div class="edit-contact__row">
        <BaseCheckbox
          label="Display"
          id="display"
          name="display"
          value="Display"
          v-model:checked="isDisplay"
        />

        <div class="edit-contact__btn">
          <BaseButton modify="primary" text="Редагувати" type="submit" />
        </div>
      </div>
    </BaseForm>
  </div>
</template>

<style lang="scss">
@import 'ContactEdit';
</style>
