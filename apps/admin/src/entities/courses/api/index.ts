import { CourseControllerApi, useApi } from '@/shared'
import { ref } from 'vue'

const course = ref()
async function getCourse() {
  const courseApi = useApi(CourseControllerApi)

  const courseData = await courseApi.getAll6({
    courseDtoFotFilter: {
      page: 0,
      pageSize: 10,
    },
  })

  course.value = courseData.data
}

export { getCourse, course }
