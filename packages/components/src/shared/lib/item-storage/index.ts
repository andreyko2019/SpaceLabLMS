import Cookies from 'universal-cookie'

const cookies = new Cookies()

export function useCookiesStorage(key: string) {
  function setItem(value: string | null) {
    cookies.set(key, value)
  }

  return { setItem }
}
