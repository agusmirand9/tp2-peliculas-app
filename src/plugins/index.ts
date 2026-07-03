// Types
import type { App } from 'vue'

// Plugins
import vuetify from './vuetify'
import router from '../router'

export function registerPlugins (app: App) {
  app.use(vuetify)
  app.use(router)
}