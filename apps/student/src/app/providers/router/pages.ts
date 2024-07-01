import { routeName as signIn } from './routes/sign-in'
import { routeName as Statistics } from './routes/statistics'
import { routeName as Literature } from './routes/literature'
import { routeName as Lessons } from './routes/lessons'
import { routeName as Dashboard } from './routes/dashboard'
import { routeName as Tasks } from './routes/tasks/index'
import { routeName as Task } from './routes/tasks/task'
import { routeName as Main } from './routes/main'
import { routeName as notFound } from './routes/not-found'
import { routeName as Redirect } from './routes/redirect'

export const pages = {
  signIn,
  Statistics,
  Literature,
  Lessons,
  Dashboard,
  Tasks,
  Task,
  Main,
  notFound,
  Redirect,
} as const
