import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Button from 'primevue/button';

import router from './router'

import '@/assets/main.css'
// import 'primevue/resources/themes/lara-light-teal/theme.css';
import 'primevue/resources/themes/lara-light-blue/theme.css';

import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';      
import '/node_modules/primeflex/primeflex.css';     
import { createPinia } from 'pinia'


const pinia = createPinia()
const app = createApp(App);
app
.use(router)
.use(PrimeVue)
.use(pinia);

app.component('Button', Button);

app.mount('#app');