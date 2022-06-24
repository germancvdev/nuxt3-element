import { defineStore } from 'pinia'

interface State {
  type: string // success, error, warning, info. etc
  duration: number
  isShow: Boolean
  isActive: Boolean
  title: string
  message: string
  timeout: NodeJS.Timeout
}

export const useNotification = defineStore('store/notification', {
  state: (): State => ({
    isActive: false,
    isShow: false,
    type: 'success',
    duration: 3000,
    message: '',
    title: '',
    timeout: null,
  }),

  actions: {
    show() {
      this.isActive = true
      this.isShow = true

      if (this.timeout != null) {
        clearTimeout(this.timeout)
        this.timeout = null
      }
      this.timeout = setTimeout(() => {
        this.isShow = false
      }, this.duration)
    },
  },
})
