import { routeName as signIn } from './routes/sign-in'
import { routeName as LessonsPage } from './routes/lessons'
import { routeName as TaskPage } from './routes/task/task'
import { routeName as notFoundRoute } from './routes/not-found'
import { routeName as CoursesPage } from './routes/courses/courses'
import { routeName as StudentPage } from './routes/student'
import { routeName as StatisticsPage } from './routes/statistics'
import { routeName as RolesPage } from './routes/roles'
import { routeName as LiteraturePage } from './routes/literature'
import { routeName as ContactsPage } from './routes/contacts'
import { routeName as CoursesCardPage } from './routes/courses/courses-card'

export const pages = {
  signIn,
  LessonsPage,
  TaskPage,
  notFoundRoute,
  CoursesPage,
  StudentPage,
  StatisticsPage,
  RolesPage,
  LiteraturePage,
  ContactsPage,
  CoursesCardPage,
} as const
