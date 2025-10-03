import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
Object.entries(ElementPlusIconsVue).forEach(([name, component]) => {
  app.component(name, component as any)
})
app.mount('#app')
