import { AppPages } from '../router'

interface IRoute<T extends object = {}> {
  name: string
  params: T
}

export class AppRoutes {
  private constructor() {}

  static getSignIn() {
    return getRoute(AppPages.signIn, {})
  }

  static getAdminStatistics() {
    return getRoute(AppPages.StatisticsPage, {})
  }

  static getAdminRoles() {
    return getRoute(AppPages.RolesPage, {})
  }

  static getAdminLiterature() {
    return getRoute(AppPages.LiteraturePage, {})
  }

  static getAdminContacts() {
    return getRoute(AppPages.ContactsPage, {})
  }

  static getAdminTasks() {
    return getRoute(AppPages.TaskPage, {})
  }

  static getAdminStudents() {
    return getRoute(AppPages.StudentPage, {})
  }

  static getAdminStudentAdd() {
    return getRoute(AppPages.StudentAddPage, {})
  }

  static getAdminStudentCard() {
    return getRoute(AppPages.StudentCardPage, {})
  }

  static getAdminLessons() {
    return getRoute(AppPages.LessonsPage, {})
  }

  static getAdminCourses() {
    return getRoute(AppPages.CoursesPage, {})
  }

  static getAdminCourseCard() {
    return getRoute(AppPages.CoursesCardPage, {})
  }

  static getAdminCourseAdd() {
    return getRoute(AppPages.ContactAddPage, {})
  }

  static getAdminCourseEdit() {
    return getRoute(AppPages.ContactEditPage, {})
  }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  }
}
