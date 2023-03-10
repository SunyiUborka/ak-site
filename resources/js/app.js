import './bootstrap';
import {createApp} from 'vue'
import HomeView from "./views/HomeView.vue";
import { router } from './router/index'

createApp(HomeView).use(router).mount('#app')