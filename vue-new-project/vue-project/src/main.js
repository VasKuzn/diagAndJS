import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader.vue'
import './theme.css'

const app = createApp(App)
//global reg
app.component('the-header', TheHeader)
app.mount('#app')
