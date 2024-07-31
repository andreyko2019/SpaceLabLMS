import {ref} from "vue";

interface ProcessedLiteratureDto {
    name: string
    typeLiterature: string
    course: string | null
    keyWords: string
}

export function literatureData() {

    const isLoading = ref(false)
    const pageSize = ref(4)
    const tdData = ref<ProcessedLiteratureDto[]>([])
    const totalPage = ref<number>(0)
    const page = ref(0)
    const isModalEdit = ref(false)

    const thData: string[] = ['Назва', 'Тип', 'Курс', 'Ключові слова', '']


    return {
        thData,
        isLoading,
        pageSize,
        tdData,
        totalPage,
        page,
        isModalEdit
    }
}