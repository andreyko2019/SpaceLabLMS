<script setup lang="ts">
import {BaseButton, TheTable, ThePagination, useToggle} from "@spacelablms/components";
import {literatureData} from "@/features";
import {LiteratureControllerApi, useApi} from "@/shared";
import {ref} from "vue";
import {useRouter} from "vue-router";

const isTest = ref(true)

const {thData, isLoading, pageSize, tdData, totalPage, page, isModalEdit} = literatureData()

const openModalEdit = useToggle(isModalEdit)
const router = useRouter()

async function getPagination(pageNumber = 0) {
  isLoading.value = true
  const api = useApi(LiteratureControllerApi)

  try {
    const data = await api.getAll4({
      literatureDtoForFilter: {
        page: pageNumber,
        pageSize: pageSize.value,
      }
    })

    if (data.data.content) {
      tdData.value = data.data.content.map(item => ({
        name: item.name || '',
        typeLiterature: item.typeLiterature || '',
        course: item.course || '-',
        keyWords: item.keyWords?.length ? item.keyWords.join(', ') : '-',
      }));

      console.log(data.data.totalPages)

      totalPage.value = data.data.totalPages || 0
    }
  } catch (error) {
    console.error(error)
    isTest.value = false
  } finally {
    isLoading.value = false
  }
}

getPagination()

async function onPageChange(pageNumber: number) {
  page.value = pageNumber

  await getPagination(pageNumber)

  router.push({ query: { page: pageNumber.toString() } })
}
</script>

<template>
  <div class="literature__top">
    <h1 class="literature__title">
      Література
    </h1>

    <div class="literature__add">
      <BaseButton
          modify="primary"
          text="Додати літературу"
          @click=""
          :loading="true"
      />
    </div>
  </div>

  <div class="literature__all">
    <TheTable :th="thData" :td="tdData" @action="openModalEdit" />

    <div class="literature__pagination">
      <ThePagination
          :model-value="page"
          :count="totalPage - 1"
          :is-disabled="isLoading"
          @update:model-value="onPageChange"
      />
    </div>
  </div>

</template>

<style lang="scss">
@import "Literature";
</style>