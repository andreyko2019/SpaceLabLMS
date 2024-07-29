import Cookies from 'js-cookie'
export function useSetCookie(name: string, token: string): void {
  Cookies.set(name, token)
}

export function useGetCookie(name: string) {
  return Cookies.get(name)
}

export function useRemoveCookie(name: string) {
  Cookies.remove(name)
}
