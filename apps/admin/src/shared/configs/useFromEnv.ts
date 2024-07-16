export function useFromEnv(key: string): string {
  return import.meta.env[key] as string
}
