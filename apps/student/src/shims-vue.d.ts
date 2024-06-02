declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

// In a .d.ts file, e.g., env.d.ts or within shims-vue.d.ts
declare interface ImportMeta {
  readonly env: {
    [key: string]: string | boolean | undefined;
  }
}
