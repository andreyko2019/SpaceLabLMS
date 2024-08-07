<script setup lang="ts">
import { TheTable, ThePagination } from "@spacelablms/components";
import {
  getLiterature,
  literatureCurrentPage, literatureId,
  literatureTd,
  literatureTh,
  literatureTotalPage
} from "@/entities";
import {onMounted} from "vue";
import {edit} from "@/shared";
import {useRouter} from "vue-router";

const router = useRouter()

// const test = await getLiteratureTypes()
// console.log(test)

const literatureHandle = (id: string, action: string) => {
  switch (action) {
    case 'edit':
      edit(id)
      literatureId.value = +id
      router.push('/literature-edit')
      break
    default:
      console.log('Unknown action:', action)
  }
}

async function onPageChange(pageNumber: number) {
  literatureCurrentPage.value = pageNumber
  await getLiterature(literatureCurrentPage.value - 1)
}

onMounted(getLiterature)
</script>

<template>
  <div class="literature__top">
    <h1 class="literature__title">
      Література
    </h1>
    <div class="literature__add">
      <router-link to="/literature-add">Додати літературу</router-link>
    </div>
  </div>

  <div class="literature__all">
    <TheTable :th="literatureTh" :td="literatureTd" @action="literatureHandle" />

    <div class="literature__pagination">
      <ThePagination :totalPage="literatureTotalPage" @change="onPageChange"/>
    </div>
  </div>

</template>

<style lang="scss">
@import "Literature";
</style>