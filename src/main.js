import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import './assets/styles/tailwind.css'
import './assets/styles/style.css'

createApp(App).use('axios').mount('#app')
