import { InferType, object, string } from 'yup'
import { useI18n } from 'vue-i18n'

const namePattern = /^[a-zA-Zа-яА-Я]([a-zA-Zа-яА-Я]+)*$/
const name = namePattern;
const linkPattern =
    /^[а-яА-ЯёЁa-zA-Z0-9._%+-]+@[а-яА-ЯёЁa-zA-Z0-9.-]+\.[а-яА-ЯёЁa-zA-Z]{2,4}$/

export function yupAddLiteratureSchema() {
    const { t } = useI18n()

    return object({
        name: string()
            .required(t('VALIDATION.THE_REQUIRED_FIELD'))
            .min(3, t('VALIDATION.MIN'))
            .max(100, t('VALIDATION.MAX'))
            .test('name', t('VALIDATION.NAME'), (value) => {
                return name.test(value)
            }),
        linkForDownload: string()
            .required(t('VALIDATION.THE_REQUIRED_FIELD'))
            .test('linkForDownload', t('VALIDATION.EMAIL'), (value) => {
                return linkPattern.test(value)
            }),
        keyWords: string()
            .required(t('VALIDATION.THE_REQUIRED_FIELD'))
            .min(3, t('VALIDATION.MIN'))
            .max(100, t('VALIDATION.MAX'))
            .test('keywords', t('VALIDATION.KEYWORDS'), (value) => {
                return name.test(value)
            })

        // display: boolean().required(t('VALIDATION.THE_REQUIRED_FIELD')),
    })
}

export type SchemaAddLiteratureType = InferType<ReturnType<typeof yupAddLiteratureSchema>>
