import { createApp, onMounted } from 'vue';

import './style.css';
import store from './store';
import router from './router';
import App from './App.vue';
import bootstrap from './bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
import "aos/dist/aos.css"
import AOS  from 'aos';
/* import typedjs from 'typed.js' */

createApp(App)

.use(bootstrap)
.use(AOS)
/* .use(VueTypedJs) */
.use(store)
.use(VueAxios.axios)
.use(router)
.mount("#app");
onMounted(() => {
    AOS.init();
})