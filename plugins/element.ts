import ElementPlus from 'element-plus'
import { ID_INJECTION_KEY } from 'element-plus'
import '../assets/scss/element-dark.scss'
import '../assets/scss/element.scss'
import es from 'element-plus/es/locale/lang/es'

export default defineNuxtPlugin(({ vueApp: { use, provide } }) => {
  use(ElementPlus, {
    locale: es,
  })
  provide(ID_INJECTION_KEY, {
    prefix: Math.floor(Math.random() * 10000),
    current: 0,
  })
})
