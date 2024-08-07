<script setup lang="ts">

import { addLiteratureLinks, useValidAddLiterature} from "@/features";
import {BaseButton, BaseCheckbox, BaseForm, BaseIcon, BaseInput} from "@spacelablms/components";
import { LiteratureControllerApi, useApi} from "@/shared";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter()
const addLiteratureForm = useValidAddLiterature()
const isDisplay = ref(false)
const isLoading = ref(false)

async function addLiterature() {
  const api = useApi(LiteratureControllerApi)

  try {

    await api.add4({
        name: addLiteratureForm.values.name,
        linkForDownload: addLiteratureForm.values.linkForDownload,
        keyWords: addLiteratureForm.values.keyWords,
    })

    router.push('/literature')
  } catch (error) {
    console.error(error)
  }
}

async function onSubmit() {
  const { valid } = await addLiteratureForm.instance.validate()

  if (!valid) return
  isLoading.value = true
  await addLiterature()
  isLoading.value = false
}
</script>

<template>
  <div class="add-literature">
    <h1 class="add-literature__title">Додати літературу</h1>

    <div class="add-literature__links">
      <router-link
          class="add-literature__links-item"
          v-for="(link, index) in addLiteratureLinks"
          :key="index"
          :to="link.href"
          :class="{ 'add-literature__links-item_act': !link.icon }"
      >
        {{ link.name }}

        <span v-if="link.icon">
          <BaseIcon :icon="link.icon" />
        </span>
      </router-link>
    </div>

    <BaseForm @send="onSubmit">
      <div class="add-literature__form">
        <BaseInput
            placeholder="Назва"
            label="Назва"
            name="name"
        />

        <BaseInput
            placeholder="Посилання"
            label="Посилання"
            name="linkForDownload"
        />

        <BaseInput
            placeholder="Ключові слова"
            label="Ключові слова"
            name="keyWords"
        />


      </div>

      <div class="add-literature__row">
        <BaseCheckbox
            label="Display"
            id="display"
            name="display"
            value="Display"
            v-model:checked="isDisplay"
        />

        <div class="add-literature__btn">
          <BaseButton modify="primary" text="Додати" type="submit" />
        </div>
      </div>
    </BaseForm>
  </div>
</template>

<style scoped lang="scss">
@import 'LiteratureAdd.scss';
</style>