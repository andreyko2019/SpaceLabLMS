<script setup lang="ts">
import {
  BaseIcon,
  BaseForm,
  ThePreloader,
  BaseInput,
  BaseCheckbox,
  BaseButton,
} from '@spacelablms/components'
import { addContactInp, addContactLinks, form } from '@/features'
import { ref } from 'vue'
import { ContactControllerApi, useApi } from '@/shared'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const isDisplay = ref(false)
const addContactForm = form()

async function addNewContact() {
  const api = useApi(ContactControllerApi)

  try {
    await api.add7({
      contactDto: {
        name: addContactForm.values.add_name,
        middleName: addContactForm.values.add_middlename,
        lastName: addContactForm.values.add_lastname,
        telephone: addContactForm.values.add_telephone,
        telegram: addContactForm.values.add_telegram,
        email: addContactForm.values.add_email,
        display: isDisplay.value,
      },
    })

    router.push('/contact')
  } catch (error) {
    console.error(error)
  }
}
async function onSubmit() {
  const { valid } = await addContactForm.instance.validate()

  if (!valid) return
  isLoading.value = true
  await addNewContact()
  isLoading.value = false
}
</script>

<template>
  <div class="add-contact"></div>

  <div class="edit-contact">
    <h1 class="edit-contact__title">Додати контакт</h1>

    <div class="edit-contact__links">
      <router-link
        class="edit-contact__links-item"
        v-for="(link, index) in addContactLinks"
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
          v-for="(inp, index) in addContactInp"
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
          <BaseButton modify="primary" text="Додати" type="submit" />
        </div>
      </div>
    </BaseForm>

    <ThePreloader v-if="isLoading" />
  </div>
</template>

<style lang="scss"></style>
