import { ref, Ref } from 'vue'
import { useApi } from '@spacelablms/student/src/shared/api'
import { PersonalAreaControllerApi } from '@spacelablms/student/src/shared/api'

interface IPersonalData {
  contact: {
    name: string
  }
  image: string
  currentSituation: string
}
const userName: Ref<string> = ref('')
const userRole: Ref<string> = ref('')
const userAvatar: Ref<string> = ref('')

const personalApi = useApi(PersonalAreaControllerApi)

async function getUserData() {
  try {
    const authToken =
      'student@gmail.com'

    const config = {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }

    const response = await personalApi.getPersonalData(config)

    console.log('User data:', response.data)

    const { contact, currentSituation, image }: IPersonalData = <IPersonalData>(
      response.data
    )

    userName.value = contact.name
    userRole.value = currentSituation

    userAvatar.value = image
  } catch (error) {
    console.error('Error getting user data:', error)
  }
}

export { userName, userRole, userAvatar, getUserData }
