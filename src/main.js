import {
    createApp
} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "./assets/lib/axios";
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(router).use(store).mount('#app')