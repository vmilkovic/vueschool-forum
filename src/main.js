import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'

const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(store)

const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let appComponentConfig = requireComponent(fileName)
  appComponentConfig = appComponentConfig.default || appComponentConfig
  const appComponentName = appComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  forumApp.component(appComponentName, appComponentConfig)
})

forumApp.mount('#app')
