import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import './assets/styles/main.scss'
import './assets/styles/navbar.scss'
import './assets/styles/drafts.scss'
import './assets/styles/profile.scss'
import './assets/styles/notification.scss'
import './assets/styles/signatories.scss'
import './assets/styles/documents.scss'
import './assets/styles/register.scss'
import './assets/styles/login.scss'
import './assets/styles/statements.scss'
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
