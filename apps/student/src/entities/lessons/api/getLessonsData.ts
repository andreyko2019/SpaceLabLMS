import { LessonControllerApi, useApi } from '@/shared/api'
// import { lessonsTd } from '@/entities'

export async function getLessonsData() {
  const api = useApi(LessonControllerApi)
  //
  const data = await api.getAllActive({ page: 0, size: 10 })
  //
  console.log(data)
  if (data.data) {
    const lessonsData = data.data.content

    // lessonsData?.forEach((item) => {
    //   const mentorName = item.mentor?.fullName
    //   const lessonsObj = {
    //     main: item.date,
    //     time: '8',
    //     mentor: mentorName,
    //     status: item.status,
    //     link: item.link,
    //   }

    // lessonsTd.push(lessonsObj)

    console.log(lessonsData)
    // })
    console.log()
  }
}
