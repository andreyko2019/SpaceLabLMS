import { routeName as signIn } from './routes/sign-in'
import { routeName as notFound } from './routes/not-found'
import { routeName as student } from './routes/student'
import { routeName as admin } from './routes/admin'
import { routeName as adminStatistics } from './routes/admin/statistics'
import { routeName as adminRoles } from './routes/admin/roles'
import { routeName as adminLiterature } from './routes/admin/literature'
import { routeName as adminDashboard } from './routes/admin/dashboard'
import { routeName as adminCreate } from './routes/admin/create'
import { routeName as adminContacts } from './routes/admin/contacts'
import { routeName as adminTasks } from './routes/admin/tasks'
import { routeName as adminTask } from './routes/admin/tasks/task'
import { routeName as adminCreateTask } from './routes/admin/tasks/create-task'
import { routeName as adminStudents } from './routes/admin/students'
import { routeName as adminStudent } from './routes/admin/students/student'
import { routeName as adminStudentTasks } from './routes/admin/students/tasks'
import { routeName as adminCreateStudent } from './routes/admin/students/createStudent'
import { routeName as adminLessons } from './routes/admin/lessons'
import { routeName as adminCreateLesson } from './routes/admin/lessons/create-lesson'
import { routeName as adminCourses } from './routes/admin/courses'
import { routeName as adminCourse } from './routes/admin/courses/course'
import { routeName as studentStatistics } from './routes/student/statistics'
import { routeName as studentLiterature } from './routes/student/literature'
import { routeName as studentLessons } from './routes/student/lessons'
import { routeName as studentDashboard } from './routes/student/dashboard'
import { routeName as studentTasks } from './routes/student/tasks'
import { routeName as studentTask } from './routes/student/tasks/task'

export const pages = {
    signIn,
    notFound,
    admin,
    adminStatistics,
    adminRoles,
    adminLiterature,
    adminDashboard,
    adminCreate,
    adminContacts,
    adminTasks,
    adminTask,
    adminCreateTask,
    adminStudents,
    adminStudent,
    adminStudentTasks,
    adminCreateStudent,
    adminLessons,
    adminCreateLesson,
    adminCourses,
    adminCourse,
    student,
    studentStatistics,
    studentLiterature,
    studentLessons,
    studentDashboard,
    studentTasks,
    studentTask
} as const
