export interface IUserSocial {
  name: string
  href: string
}
export interface IDashboardForm {
  label: string
  name: string
}

export interface IFormData {
  [key: string]: string | File | null
  lastname: string
  username: string
  middlename: string
  years: string
  telegram: string
  email: string
  telephone: string
  password: string
  'repeatpassword': string
  newFile: null
  oldFile: string
  currentSituations: string | null
  levelEnglish: string
  work: string | null
  education: string
}

export interface ILang {
  en: {
    STATUS_WORK: {
      STUDYING: string
      WORKING: string
      STUDIES_AND_WORKING: string
      UNEMPLOYED: string
    }
    STATUS: {
      ACTIVE: string
      INACTIVE: string
      RECRUITING: string
    }
    LESSONS_STATUS: {
      ACTIVE: string
      BLOCKED: string
      EXPELLED: string
    }
  }
  ua: {
    STATUS_WORK: {
      STUDYING: string
      WORKING: string
      STUDIES_AND_WORKING: string
      UNEMPLOYED: string
    }
    STATUS: {
      ACTIVE: string
      INACTIVE: string
      RECRUITING: string
    }
    LESSONS_STATUS: {
      ACTIVE: string
      BLOCKED: string
      EXPELLED: string
    }
  }
}

export interface ResponseError {
  response?: {
    data?: string
  }
}

export type EnumType =
  | 'listCourseStatuses'
  | 'listCurrentSituations'
  | 'listEnglishLevels'
  | 'listStudentStatuses'
