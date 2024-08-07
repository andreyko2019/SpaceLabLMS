import { routeName as signIn } from './routes/sign-in'
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
import { routeName as LiteraturePage } from './routes/literature/literature'
import { routeName as LiteratureAddPage } from './routes/literature/literature-add'
import { routeName as ContactsPage } from './routes/contact/contacts'
import { routeName as ContactAddPage } from './routes/contact/contact-add'
import { routeName as ContactEditPage } from './routes/contact/contact-edit'

export const pages = {
  signIn,
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
  LiteratureAddPage,
  ContactsPage,
  ContactAddPage,
  ContactEditPage,
} as const
