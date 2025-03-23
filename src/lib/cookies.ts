import Cookies from 'universal-cookie'

const cookies = new Cookies()

export const getToken = (): string => cookies.get('@<name>/token')

export const setToken = (token: string) => {
  cookies.set('@<name>/token', token, { path: '/' })
}

export const removeToken = () => cookies.remove('@<name>/token', { path: '/' })
