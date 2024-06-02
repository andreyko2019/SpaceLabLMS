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

    static getMain() {
        return getRoute(AppPages.Main, {})
    }

    static getStatistics() {
        return getRoute(AppPages.Statistics, {})
    }

    static getLiterature() {
        return getRoute(AppPages.Literature, {})
    }

    static getLessons() {
        return getRoute(AppPages.Lessons, {})
    }

    static getDashboard() {
        return getRoute(AppPages.Dashboard, {})
    }

    static getSTasks() {
        return getRoute(AppPages.Tasks, {})
    }

    static getTask(id: number | string) {
        return getRoute(AppPages.Task, { id })
    }
}

function getRoute<T extends object = {}>(name: string, params: T): IRoute<T> {
    return {
        name,
        params
    }
}
