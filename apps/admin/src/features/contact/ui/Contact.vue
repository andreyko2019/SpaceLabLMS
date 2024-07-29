<script setup lang="ts">
import {
  contactData,
  useValidAddContactForm,
  useValidEditContactForm,
} from '@/features'
import { ContactControllerApi, useApi } from '@/shared'
import {
  BaseButton,
  BaseForm,
  BaseInput,
  TheModal,
  ThePagination,
  TheTable,
  useToggle,
} from '@spacelablms/components'
import Swal from 'sweetalert2'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const {
  inpData,
  thData,
  isModalAdd,
  page,
  pageSize,
  totalPage,
  isLoading,
  tdData,
  isName,
  isModalEdit,
  inpDataEdit,
} = contactData()

const addContactForm = useValidAddContactForm()
const editContactForm = useValidEditContactForm()
const openModalAdd = useToggle(isModalAdd)
const closeModalAdd = useToggle(isModalAdd)
const openModalEdit = useToggle(isModalEdit)
const closeModalEdit = useToggle(isModalEdit)
const isTest = ref(true)
async function addContact() {
  const api = useApi(ContactControllerApi)

  try {
    const data = await api.add7({
      contactDto: {
        name: addContactForm.values.name,
        middleName: addContactForm.values.middlename,
        lastName: addContactForm.values.lastname,
        telephone: addContactForm.values.telephone,
        telegram: addContactForm.values.telegram,
        email: addContactForm.values.email,
        display: true,
      },
    })

    if (data.data) {
      Swal.fire({
        title: 'Контакт додано успішно!',
        text: `ID:${data.data.id}`,
        icon: 'success',
        confirmButtonText: 'Ок',
      })
    }
  } catch (error) {
    console.error(error)
  }
}
async function getPagination(pageNumber = 0) {
  isLoading.value = true
  const api = useApi(ContactControllerApi)

  try {
    const data = await api.getAll7({
      contactDtoForFilter: {
        page: pageNumber,
        pageSize: pageSize.value,
      },
    })

    if (data.data.content && data.data) {
      tdData.value = data.data.content.map((item) => ({
        name: `${item.name} ${item.middleName} ${item.lastName}`,
        telephone: item.telephone,
        telegram: item.telegram,
        email: item.email,
        icon: 'pencil',
      }))

      totalPage.value = data.data.totalPages || 0
    }
  } catch (error) {
    console.error(error)
    isTest.value = false
  } finally {
    isLoading.value = false
  }
}
async function addContactOnSubmit() {
  const { valid, errors } = await addContactForm.instance.validate()

  console.log(errors)
  if (!valid) return

  console.log(123)
  await addContact()
  isModalAdd.value = !isModalAdd.value
}
async function onPageChange(pageNumber: number) {
  page.value = pageNumber

  await getPagination(pageNumber)

  router.push({ query: { page: pageNumber.toString() } })
}

async function searchContact() {
  const api = useApi(ContactControllerApi)

  const data = await api.getAll7({
    contactDtoForFilter: {
      page: 0,
      pageSize: 1,
      fullname: isName.value,
    },
  })

  if (data.data?.content) {
    tdData.value = data.data.content.map((item) => ({
      name: `${item.name} ${item.middleName} ${item.lastName}`,
      telephone: item.telephone,
      telegram: item.telegram,
      email: item.email,
      icon: 'pencil',
    }))

    totalPage.value = data.data.totalPages || 0

    console.log(data.data)
  }
}
async function handleInput() {
  await searchContact()
}
async function editContact() {
  const api = useApi(ContactControllerApi)

  try {
    const editData = await api.edit6({
      contactDto: {
        name: editContactForm.values.name,
        lastName: editContactForm.values.lastname,
        middleName: editContactForm.values.middlename,
        telegram: editContactForm.values.telegram,
        telephone: editContactForm.values.telephone,
        email: editContactForm.values.email,
        display: editContactForm.values.display,
      },
      id: editContactForm.values.id,
    })

    if (editData.data) {
      console.log(editData.data)
      Swal.fire({
        title: 'Контакт успішно оновлений!',
        icon: 'success',
        confirmButtonText: 'Ок',
      })
    }
  } catch (error) {
    console.error(error)
  }
}
async function editContactOnSubmit() {
  const { valid } = await editContactForm.instance.validate()

  if (!valid) return

  await editContact()
  isModalEdit.value = !isModalEdit.value
}

onMounted(getPagination)
</script>

<template>
  <div class="contact">
    <h1 class="contact__title">Контакти</h1>

    <div class="contact__row">
      <div class="contact__search">
        <BaseInput
          placeholder="placeholder"
          name="search"
          v-model="isName"
          @change="handleInput"
        />
      </div>

      <div class="contact__add">
        <BaseButton
          modify="primary"
          text="Додати контакт"
          @click="openModalAdd"
          :loading="true"
        />
      </div>
    </div>

    <div class="contact__all">
      <TheTable :th="thData" :td="tdData" @action="openModalEdit" />

      <div class="contact__pagination">
        <ThePagination
          :model-value="page"
          :count="totalPage - 1"
          :is-disabled="isLoading"
          @update:model-value="onPageChange"
        />
      </div>
    </div>

    <TheModal v-if="isModalAdd" @close="closeModalAdd" title="Додати контакт">
      <BaseForm @send="addContactOnSubmit">
        <BaseInput
          v-for="(inp, index) in inpData"
          :key="index"
          :label="inp.label"
          :name="inp.name"
        />

        <div class="contact__btn">
          <BaseButton type="submit" text="Додати" />
        </div>
      </BaseForm>
    </TheModal>

    <TheModal
      v-if="isModalEdit"
      @close="closeModalEdit"
      title="Редагувати контакт"
    >
      <BaseForm @send="editContactOnSubmit">
        <BaseInput
          v-for="(inp, index) in inpDataEdit"
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
