export function useGetCookie(cname: string) {
  const decodedCookie = decodeURIComponent(document.cookie)
  const cookieArray = decodedCookie.split(';')

  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim()
    if (cookie.indexOf(cname + '=') === 0) {
      return cookie.substring(cname.length + 1)
    }
  }

  return ''
}
