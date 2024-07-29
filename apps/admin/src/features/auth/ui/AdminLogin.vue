<script setup lang="ts">
import {
  BaseButton,
  BaseForm,
  BaseInput,
  useSetCookie,
} from '@spacelablms/components'
import { AuthControllerApi, useApi } from '@/shared'
import { useAuthStore, useValidAdminForm } from '@/features'
import { useRouter } from 'vue-router'

const adminForm = useValidAdminForm()
const router = useRouter()
async function adminSignIn() {
  const authApi = useApi(AuthControllerApi)
  const authAdminStore = useAuthStore()

  try {
    const { data } = await authApi.login({
      jwtRequest: {
        username: adminForm.values.email,
        password: adminForm.values.password,
      },
    })

    const accessToken = <string>data.accessToken
    const refreshToken = <string>data.refreshToken

    useSetCookie('admin-access-token', accessToken)
    useSetCookie('admin-refresh-token', refreshToken)

    authAdminStore.checkAdminAuth()
    await router.push('/statistic')
  } catch (error) {
    console.error(error)
  }
}
const adminOnSubmit = async () => {
  const { valid } = await adminForm.instance.validate()

  if (!valid) return

  await adminSignIn()
}
</script>

<template>
  <div class="sign">
    <h1 class="sign__title">Вхід</h1>

    <div class="sign__form">
      <BaseForm @send="adminOnSubmit">
        <BaseInput label="Email" name="email" />

        <BaseInput label="Пароль" name="password" />

        <div class="sign__btn">
          <BaseButton type="submit" text="Вхід" />
        </div>
      </BaseForm>
    </div>
  </div>
</template>

<style lang="scss">
@import 'AdminLogin';
</style>
