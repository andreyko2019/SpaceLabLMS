import {

  ContactDtoForFilter, LiteratureDtoForFilter,
  StudentDtoForView,
} from '@/shared'

type InputType = 'text' | 'number' | 'password' | 'email' | 'tel'

interface StudentInput {
  label: string
  name: string
  type?: InputType
}

// type DropDownItem = {
//   label: string
//   option: string[]
//   select: keyof SelectedValues
// }

// type CurrentSituation = Add1CurrentSituationEnum | undefined
// type EnglishLevel = Add1EnglishLevelEnum | undefined
// type PreparationLevel = Add1LevelOfPreparationEnum | undefined
// type StudentStatus = Add1StatusEnum | undefined
//
// type SelectedValues = {
//   currentSituations: CurrentSituation
//   englishLevels: EnglishLevel
//   studentStatuses: StudentStatus
//   preparationLevels: PreparationLevel
// }

interface IStudentDtoForView extends StudentDtoForView {
  courseName?: string
  statusName?: string
  icon?: string[]
}

interface IContact extends ContactDtoForFilter {
  id?: number
  fullName?: string
  icon?: string[]
}

export interface ILiterature extends Omit<LiteratureDtoForFilter, 'typeLiterature'> {
  name?: string;
  typeLiterature?: string;
  course?: string | null;
  keyWords?: string;
  icon?: string[];
}

export type {
  StudentInput,
  IStudentDtoForView,
  IContact,
}
