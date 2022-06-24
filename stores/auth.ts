import { defineStore } from 'pinia'
import { useNotification } from './notification'

interface State {
  firstName: string
  lastName: string
  userId: number | null
  loading: boolean
  loadingRegister: boolean
  auth: Auth
}

interface Auth {
  password: string
  email: string
}

export const useAuthUserStore = defineStore('auth/user', {
  state: (): State => ({
    firstName: '',
    lastName: '',
    userId: 10,
    loading: false,
    loadingRegister: false,
    auth: {
      email: '',
      password: '',
    },
  }),

  actions: {
    async login() {
      const token = useCookie<String>('token')
      const { $api } = useNuxtApp()
      const router = useRouter()
      const noti = useNotification()
      this.loading = true
      try {
        const { token: t } = await $api('/users/login/', {
          method: 'POST',
          body: { ...this.auth },
        })
        token.value = t

        router.push({ path: '/' })
      } catch (error) {
        const { message, name, statusCode } = error.response._data.error
        noti.$patch({
          title: `${name} ${statusCode}`,
          type: 'error',
          message,
        })
        noti.show()
      }
      this.loading = false
    },

    async singup() {
      const { $api } = useNuxtApp()
      const noti = useNotification()

      this.loadingRegister = true

      try {
        await $api('/signup/', {
          method: 'POST',
          body: { ...this.auth },
        })

        await this.login()
      } catch (error) {
        const { message, name, statusCode } = error.response._data.error

        noti.$patch({
          title: `${name} ${statusCode}`,
          type: 'error',
          message,
        })

        noti.show()
      }
      this.loadingRegister = false
    },
  },
})
