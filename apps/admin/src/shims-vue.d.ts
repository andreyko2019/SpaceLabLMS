declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare interface ImportMeta {
  readonly env: {
    [key: string]: string | boolean | undefined
  }
}
