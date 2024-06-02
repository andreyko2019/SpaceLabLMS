<template>
  <VForm
    button-submit-txt="Sign in"
    :is-submitting="isSubmitting"
    :handler-submit="onSubmit"
  >
    <VeeInputLogin />
    <VeeInputPassword />
  </VForm>
</template>

<script setup lang="ts">
import { VeeInputPassword, VForm } from '@/shared/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string } from 'yup'
import { useRouter } from 'vue-router'
import { useAppRoutes } from '@/app/providers'
import VeeInputLogin from '@/shared/ui/form/vee/vee-input/VeeInputLogin.vue'
import { api } from '@/shared/api'

const router = useRouter()
const appRoutes = useAppRoutes()

const validationSchema = toTypedSchema(
  object({
    username: string().required(),
    password: string().required('please enter your password'),
  })
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema })

const onSubmit = handleSubmit(async (values) => {
  try {
    await api
      .login({
        jwtRequest: {
          username: values.username,
          password: values.password,
        },
      })
      .then(() => goToStatistics())
  } catch (e: any) {
    console.log(e)
  }
})

const goToStatistics = () => {
  router.replace(appRoutes.getStatistics())
}
</script>
