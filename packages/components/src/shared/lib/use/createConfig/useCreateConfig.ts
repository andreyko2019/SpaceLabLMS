export function useCreateConfig(authToken: string) {
  return {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  }
}
