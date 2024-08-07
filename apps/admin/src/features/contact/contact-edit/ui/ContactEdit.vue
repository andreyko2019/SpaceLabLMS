<script setup lang="ts">
import {
  BaseIcon,
  BaseForm,
  BaseInput,
  BaseButton,
  BaseCheckbox,
  ThePreloader,
} from '@spacelablms/components'

import {
  editContactInp,
  editContactLinks,
  isDisplay,
  useValidEditContactForm,
} from '@/features'
import { ContactControllerApi, useApi } from '@/shared'
import { ref } from 'vue'
import { contactId } from '@/entities'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const editContactForm = useValidEditContactForm()

async function editContact() {
  const api = useApi(ContactControllerApi)

  try {
    await api.edit6({
      id: contactId.value,
      contactDto: {
        name: editContactForm.values.name,
        middleName: editContactForm.values.middlename,
        lastName: editContactForm.values.lastname,
        telegram: editContactForm.values.telegram,
        telephone: editContactForm.values.telephone,
        email: editContactForm.values.email,
        display: isDisplay.value,
      },
    })

    router.push('/contact')
  } catch (error) {
    console.error(error)
  } finally {
  }
}

async function onSubmit() {
  const { valid } = await editContactForm.instance.validate()

  if (!valid) return
  isLoading.value = true
  await editContact()
  isLoading.value = false
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
    
    <ThePreloader v-if="isLoading" />
  </div>
</template>

<style lang="scss">
@import 'ContactEdit';
</style>
