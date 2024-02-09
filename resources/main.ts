import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import axios from '@/plugins/axios'
import InfiniteLoading from 'v3-infinite-loading'
import 'v3-infinite-loading/lib/style.css'

const app = createApp(App)
app.component('InfiniteLoading', InfiniteLoading)
app.use(router)
app.use(axios)

app.mount('#app')
