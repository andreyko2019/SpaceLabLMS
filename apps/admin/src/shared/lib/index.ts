const edit = (id: string) => {
  console.log('Edit:', id)
}

const remove = (id: string) => {
  console.log('Delete:', id)
}

const tasks = (id: string) => {
  console.log('Task:', id)
}

export { edit, tasks, remove }

export * from './form'