<script setup lang="ts">
import {
  BaseIcon,
  BaseForm,
  ThePreloader,
  BaseInput,
  BaseCheckbox,
  BaseButton,
} from '@spacelablms/components'
import { addContactLinks, editContactInp, useValidAdd } from '@/features'
import { ref } from 'vue'
import { ContactControllerApi, useApi } from '@/shared'
import { useRouter } from 'vue-router'

const router = useRouter()
const isLoading = ref(false)
const isDisplay = ref(false)
const editContactForm = useValidAdd()

async function addContact() {
  const api = useApi(ContactControllerApi)

  try {
    await api.add7({
      contactDto: {
        name: editContactForm.values.name,
        middleName: editContactForm.values.middlename,
        lastName: editContactForm.values.lastname,
        telephone: editContactForm.values.telephone,
        telegram: editContactForm.values.telegram,
        email: editContactForm.values.email,
        display: editContactForm.values.display,
      },
    })

    router.push('/contact')
  } catch (error) {
    console.error(error)
  }
}
async function onSubmit() {
  const { valid } = await editContactForm.instance.validate()

  if (!valid) return
  isLoading.value = true
  await addContact()
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
          <BaseButton modify="primary" text="Додати" type="submit" />
        </div>
      </div>
    </BaseForm>

    <ThePreloader v-if="isLoading" />
  </div>
</template>

<style lang="scss"></style>
