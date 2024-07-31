<script setup lang="ts">
import { BaseInput, ThePagination, TheTable } from '@spacelablms/components'
import { onMounted } from 'vue'
import {
  contactTd,
  contactTh,
  getContact,
  contactCurrentPage,
  contactTotalPage,
  contactId,
} from '@/entities'
import { edit } from '@/shared'
import { useRouter } from 'vue-router'

const router = useRouter()
const contactHandle = (id: string, action: string) => {
  switch (action) {
    case 'edit':
      edit(id)
      contactId.value = +id
      router.push('/contact-edit')
      break
    default:
      console.log('Unknown action:', action)
  }
}

async function onPageChange(pageNumber: number) {
  contactCurrentPage.value = pageNumber
  await getContact(contactCurrentPage.value - 1)
}

onMounted(getContact)
</script>

<template>
  <div class="contact">
    <h1 class="contact__title">Контакти</h1>

    <div class="contact__row">
      <div class="contact__search">
        <BaseInput placeholder="Пошук" name="search" />
      </div>

      <div class="contact__add">
        <router-link to="/contact-add">Додати контакт</router-link>
      </div>
    </div>

    <div class="contact__table">
      <TheTable :th="contactTh" :td="contactTd" @action="contactHandle" />
    </div>

    <div class="contact__pagination">
      <ThePagination :totalPage="contactTotalPage" @change="onPageChange" />
    </div>
  </div>
</template>

<style lang="scss">
@import 'Contact';
</style>
