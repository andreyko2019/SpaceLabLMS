import {ref} from "vue";
import { ILiterature } from "@/entities";

const literatureTotalPage = ref(0)
const literatureCurrentPage = ref(0)
const literatureTd = ref<ILiterature[]>([])
const literatureId = ref(0)

const literatureTh = ref<string[]>([
    'Назва',
    'Тип',
    'Курс',
    'Ключові слова',
    '',
])


export {literatureTotalPage, literatureCurrentPage, literatureTh, literatureTd, literatureId}