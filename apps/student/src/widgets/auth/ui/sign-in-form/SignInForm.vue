<template>
  <div class="sign-in-form">
    <div class="sign-in-form__header">
      <h1 class="sign-in-form__header-title">Вхід</h1>
    </div>

    <form class="sign-in-form__content-wrapper" @submit.prevent="onSubmit">
      <div class="sign-in-form__content form-content">
        <FormInput
          label="Логін"
          placeholder="Введіть логін"
          name="username"
          :disabled="isLoading"
          v-model="username"
          required
        />

        <FormInput
          label="Пароль"
          placeholder="Введіть пароль"
          name="password"
          :disabled="isLoading"
          :type="isPasswordType ? 'password' : 'text'"
          v-model="password"
          required
        />
      </div>

      <div class="form-content__additional">
        <BaseCheckbox
          name="remember-checkbox"
          label="Запам'ятати мене"
          v-model="rememberCheckbox"
        />
      </div>

      <BaseButton
        class="form-content__submit-btn"
        type="submit"
        :loading="isLoading"
        text="Увійти"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useApi } from '@/shared/api'
import * as yup from 'yup'
import { AuthControllerApi } from '@/shared/api'
import {
  FormInput,
  BaseButton,
  BaseCheckbox,
  useAppForm,
  useCookiesStorage,
} from "@spacelablms/components"

const schema = yup.object({
  username: yup.string(),
  password: yup.string(),
})

type SignInForm = yup.InferType<typeof schema>

const authApi = useApi(AuthControllerApi)

const { defineField, handleSubmit } = useAppForm<SignInForm>({
  validationSchema: schema,
  initialValues: {
    username: '',
    password: '',
  },
})

const [username] = defineField('username')
const [password] = defineField('password')
const [rememberCheckbox] = defineField('rememberCheckbox', {
  value: false,
})

const onSubmit = handleSubmit(async () => {
  isLoading.value = true
  try {
    const { data } = await authApi.login({
      jwtRequest: {
        username: username.value,
        password: password.value,
      },
    })
    useCookiesStorage('student-access-token').setItem(<string>data.accessToken)
    useCookiesStorage('student-refresh-token').setItem(<string>data.refreshToken)
    useCookiesStorage('student-remember').setItem(<string>data.refreshToken)
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
})

const isLoading = ref(false)
const isPasswordType = ref(true)
</script>

<style scoped lang="scss">
@import 'SignInForm';
</style>
