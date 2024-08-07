import { routeName as signIn } from './routes/sign-in'
import { routeName as ProfilePage } from './routes/profile'
import { routeName as LessonsPage } from './routes/lessons'
import { routeName as TaskPage } from './routes/task/task'
import { routeName as notFoundRoute } from './routes/not-found'
import { routeName as CoursesPage } from './routes/courses/courses'
import { routeName as CoursesCardPage } from './routes/courses/courses-card'
import { routeName as StudentPage } from './routes/student/student'
import { routeName as StudentAddPage } from './routes/student/student-add'
import { routeName as StudentCardPage } from './routes/student/student-card'
import { routeName as StudentListPage } from './routes/student/student-list'

import { routeName as StatisticsPage } from './routes/statistics'
import { routeName as RolesPage } from './routes/roles'
import { routeName as LiteraturePage } from './routes/literature'
import { routeName as ContactsPage } from './routes/contacts'

export const pages = {
  signIn,
  ProfilePage,
  LessonsPage,
  TaskPage,
  notFoundRoute,
  CoursesPage,
  CoursesCardPage,
  StudentPage,
  StudentAddPage,
  StudentCardPage,
  StudentListPage,
  StatisticsPage,
  RolesPage,
  LiteraturePage,
  ContactsPage,
} as const
