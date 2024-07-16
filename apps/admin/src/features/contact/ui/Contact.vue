<script setup lang="ts">
import {
  BaseInput,
  BaseButton,
  TheModal,
  BaseForm,
  useToggle,
} from '@spacelablms/components'
import { ref } from 'vue'
import { useValidAddContactForm } from '@/features'
const test = ref('')

const isModal = ref(false)

const openModal = useToggle(isModal)
const closeModal = useToggle(isModal)
const contactInfo = [
  { label: "Ім'я", name: 'name' },
  { label: 'По батькові', name: 'middlename' },
  { label: 'Прізвище', name: 'lastname' },
  { label: 'Моб. телефон', name: 'telephone' },
  { label: 'Telegram', name: 'telegram' },
  { label: 'Email', name: 'email' },
]
const addContactForm = useValidAddContactForm()

const addContactOnSubmit = async () => {
  const { valid } = await addContactForm.instance.validate()

  if (!valid) return
}
</script>

<template>
  <div class="contact">
    <h1 class="contact__title">Контакти</h1>

    <div class="contact__row">
      <div class="contact__search">
        <BaseInput placeholder="Пошук" name="search" v-model="test" />
      </div>

      <div class="contact__add">
        <BaseButton text="Додати контакт" @click="openModal" />
      </div>
    </div>

    <div class="contact__all">
      <p>{{ test }}</p>
    </div>

    <TheModal v-if="isModal" @close="closeModal" title="Додати контакт">
      <BaseForm @send="addContactOnSubmit">
        <BaseInput
          v-for="(inp, index) in contactInfo"
          :key="index"
          :label="inp.label"
          :name="inp.name"
        />

        <div class="contact__btn">
          <BaseButton type="submit" text="Додати" />
        </div>
      </BaseForm>
    </TheModal>
  </div>
</template>

<style scoped lang="scss">
@import 'Contact';
</style>
