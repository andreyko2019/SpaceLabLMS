<template>
  <div>Admin statistics page333</div>
</template>

<script setup lang="ts">
    import {useApi, StatisticControllerApi} from "@/shared";

    async function getStatistic(){
      const api = useApi(StatisticControllerApi)

      const response1 = await api.getAllWidgets()
      const response2 = await api.getAverageGradeByDate()
      const response3 = await api.getAverageGradeByDate()

      console.clear()
      console.log(response1, response2, response3)
    }

    getStatistic()
</script>

<style lang="scss">
@import 'statisticsPage';
</style>
