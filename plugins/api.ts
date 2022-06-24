import { $Fetch, $fetch } from 'ohmyfetch'
import { useNotification } from '@/stores/notification'

export default defineNuxtPlugin(({ $pinia }) => {
  const config = useRuntimeConfig().public
  const cookie = useCookie('token')

  const api: $Fetch = $fetch.create({
    baseURL: config.BASE_URL,
    headers: {
      Authorization: `Bearer ${cookie.value}`,
    },

    onRequest: async ({ options }) => {
      try {
        const token = useCookie('token')
        options.headers['Authorization'] = `Bearer ${token.value}`
      } catch (_) {}
    },

    onResponse: async ({ options }) => {
      if (!options.method || !process.client) return

      const noti = useNotification($pinia)

      switch (options.method) {
        case 'POST':
          noti.$patch({
            title: 'OK!',
            type: 'success',
            message: 'Successfully created',
          })
          return noti.show()
        case 'PUT':
          noti.$patch({
            title: 'OK!',
            type: 'success',
            message: 'Successfully updated',
          })
          return noti.show()
        case 'DELETE':
          noti.$patch({
            title: 'OK!',
            type: 'success',
            message: 'Successfully deleted',
          })
          return noti.show()
        default:
          return
      }
    },

    onResponseError: async ({ response }) => {
      if (response.status === 401) {
        navigateTo('/login')
      }

      if (process.client) {
        const noti = useNotification($pinia)

        const { message, name, statusCode } = response._data.error
        noti.$patch({
          title: `${name} ${statusCode}`,
          type: 'error',
          message,
        })
        noti.show()
      }
    },
  })
  return {
    provide: {
      api,
    },
  }
})
