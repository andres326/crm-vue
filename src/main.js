import './assets/main.css';

import { createApp } from 'vue';
import { defaultConfig, plugin } from '@formkit/vue';
import config from '../formkit.config';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(plugin, defaultConfig(config));

app.mount('#app');
