import { AppPages } from '../router'

interface IRoute<T extends object = {}> {
    name: string
    params: T
}

export class AppRoutes {
    private constructor() {}

    static getStudentStatistics() {
        return getRoute(AppPages.studentStatistics, {})
    }

    static getStudentLiterature() {
        return getRoute(AppPages.studentLiterature, {})
    }

    static getStudentLessons() {
        return getRoute(AppPages.studentLessons, {})
    }

    static getStudentDashboard() {
        return getRoute(AppPages.studentDashboard, {})
    }

    static getStudentTasks() {
        return getRoute(AppPages.studentTasks, {})
    }

    static getStudentTask(id: number | string) {
        return getRoute(AppPages.studentTask, { id })
    }

    static getAdminStatistics() {
        return getRoute(AppPages.adminStatistics, {})
    }

    static getAdminRoles() {
        return getRoute(AppPages.adminRoles, {})
    }

    static getAdminLiterature() {
        return getRoute(AppPages.adminLiterature, {})
    }

    static getAdminDashboard() {
        return getRoute(AppPages.adminDashboard, {})
    }

    static getAdminCreate() {
        return getRoute(AppPages.adminCreate, {})
    }

    static getAdminContacts() {
        return getRoute(AppPages.adminContacts, {})
    }

    static getAdminTasks() {
        return getRoute(AppPages.adminTasks, {})
    }

    static getAdminTask(id: number | string) {
        return getRoute(AppPages.adminTask, { id })
    }

    static getAdminCreateTask() {
        return getRoute(AppPages.adminCreateTask, {})
    }

    static getAdminStudents() {
        return getRoute(AppPages.adminStudents, {})
    }

    static getAdminStudent(id: number | string) {
        return getRoute(AppPages.adminStudent, { id })
    }

    static getAdminStudentTasks(id: number | string) {
        return getRoute(AppPages.adminStudentTasks, { id })
    }

    static getAdminCreateStudent() {
        return getRoute(AppPages.adminCreateStudent, {})
    }

    static getAdminLessons() {
        return getRoute(AppPages.adminLessons, {})
    }

    static getAdminCreateLesson() {
        return getRoute(AppPages.adminCreateLesson, {})
    }

    getAdminCourses() {
        return getRoute(AppPages.adminCourses, {})
    }

    getAdminCourse(id: number | string) {
        return getRoute(AppPages.adminCourse, { id })
    }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
    return {
        name,
        params
    }
}
