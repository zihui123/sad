import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import 'material-design-icons/iconfont/material-icons.css';
import QrReader from 'vue3-qr-reader';


import { QrStream, QrCapture, QrDropzone } from 'vue3-qr-reader';
export default {
    components: {
      QrStream,
      QrCapture,
      QrDropzone
    },
  };
const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(QrReader);
app.mount('#app');
