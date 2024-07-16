<script src="../../../app/providers/router/routes/auth-guard.ts"></script>
<script setup lang="ts">
import {
  BaseButton,
  BaseForm,
  BaseInput,
  useSetCookie,
} from '@spacelablms/components'
import { authSchema, useValidForm } from '@/features'
import { AuthControllerApi, useApi } from '@/shared/api'
import { useAuthStore } from '@/features'

const form = useValidForm(authSchema())

async function signIn() {
  const authApi = useApi(AuthControllerApi)
  const authStore = useAuthStore()

  try {
    const { data } = await authApi.login({
      jwtRequest: {
        username: form.values.email,
        password: form.values.password,
      },
    })

    const accessToken = <string>data.accessToken
    const refreshToken = <string>data.refreshToken

    useSetCookie('student-access-token', accessToken)
    useSetCookie('student-refresh-token', refreshToken)

    authStore.checkAuth()
  } catch (error) {
    console.error('Login failed:', error)
  }
}

const onSubmit = async () => {
  const { valid } = await form.instance.validate()

  if (!valid) return

  await signIn()
}
</script>

<template>
  <div class="login">
    <h1 class="login__title">Вхід</h1>

    <div class="login__form">
      <BaseForm @send="onSubmit">
        <BaseInput label="Email" name="email" />

        <BaseInput label="Пароль" name="password" />

        <BaseButton class="login__btn" type="submit" text="Вхід" />
      </BaseForm>
    </div>
  </div>
</template>

<style lang="scss">
@import 'Login';
</style>
