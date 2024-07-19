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

  static getAdminLessons() {
    return getRoute(AppPages.LessonsPage, {})
  }

  getAdminCourses() {
    return getRoute(AppPages.CoursesPage, {})
  }

  getAdminCourseCard(card: string) {
    return getRoute(AppPages.CoursesCardPage, { card })
  }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
  return {
    name,
    params,
  }
}
