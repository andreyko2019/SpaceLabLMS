import {LiteratureControllerApi, useApi} from "@/shared";
import {contactTotalPage, literatureTd, literatureTotalPage} from "@/entities";

async function getLiterature(pageNumber = 0) {
    const api = useApi(LiteratureControllerApi)

    const literatureData = await api.getAll4({
        literatureDtoForFilter: {
            page: pageNumber,
            pageSize: 4,
        }
    })

    if (literatureData.data.content) {
        literatureTd.value = literatureData.data.content.map((item) => ({
            name: item.name || '',
            typeLiterature: item.typeLiterature || '',
            course: item.course || '-',
            keyWords: item.keyWords?.length ? item.keyWords.join(', ') : '-',
            icon: ['edit'],
        }))
    }
    console.log(contactTotalPage.value = literatureData.data.totalPages || 0)
    literatureTotalPage.value = literatureData.data.totalPages || 0

}

export {getLiterature}