import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import {createWebHashHistory,createRouter} from 'vue-router'
import Chx from './components/chx.vue'
import Chx2 from './components/chx2.vue'

const history = createWebHashHistory()
const router = createRouter({
    history: history,
    routes:[
        {path: '/', component: Chx},
        {path: '/xxx', component: Chx2}
    ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')
