<template>
  <VForm button-submit-txt="Sign in"
         :is-submitting="isSubmitting"
         :handler-submit="onSubmit">
<VeeInputLogin/>
    <VeeInputPassword/>
  </VForm>
</template>

<script setup lang="ts">
import { VeeInputPassword, VForm } from '@/shared/ui/form'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup'
import { object, string } from 'yup'
import { useRouter } from 'vue-router'
import { useAppRoutes } from '@/app/providers'
import VeeInputLogin from "@/shared/ui/form/vee/VeeInput/VeeInputLogin.vue";

const router = useRouter()
const appRoutes = useAppRoutes()

const validationSchema = toTypedSchema(
    object({
      username: string().required(),
      password: string().required('please enter your password')
    })
)

const { handleSubmit, isSubmitting } = useForm({ validationSchema })

const onSubmit = handleSubmit(async values => {
  try {
    getAuth()
  } catch (e: any) {
    console.log(e);
  }
});

function goToStatistics() {
    router.push(appRoutes.getStatistics())
}
</script>
