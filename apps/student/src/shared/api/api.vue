<template>

</template>

<script>
import {api} from "@/shared/api/useApi";

const getAuth = async () => {
  try {
    const fetchAuth = await api.login1({username: 'student@gmail.com', password: 'admin'})
    console.log(fetchAuth)
  } catch (error) {
    console.log(error)

  }
}
</script>
