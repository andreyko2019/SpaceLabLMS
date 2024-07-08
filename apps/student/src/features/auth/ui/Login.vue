<script setup lang="ts">
import { BaseButton, BaseForm, BaseInput } from '@spacelablms/components'
import { useValidForm } from '@spacelablms/components'
import { authSchema } from '@/features/auth/model/authSchema'
import { reactive } from 'vue'

const form = useValidForm(authSchema())
const loginVal = reactive({
  email: '',
  password: '',
})

const test = async () => {
  console.log(123)
  // const { valid } = await form.instance.validate()
  //
  // console.log(valid)
  // if (!valid) return
}
</script>

<template>
  <div class="login">
    <h1 class="login__title">Вхід</h1>

    <div class="login__form">
      <BaseForm @send="test">
        <BaseInput label="Email" name="email" />

        <BaseInput label="Пароль" name="password" />

        <BaseButton
          class="change-info__btn-save"
          type="submit"
          text="Зберегти"
        />
      </BaseForm>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Login';
</style>
