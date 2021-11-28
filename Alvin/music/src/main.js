import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/router.js'
import mitt from 'mitt';
import store from './store/store.js'
import './registerServiceWorker'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;
//         글로벌한 변수보관함에 emitter : emitter 항목을 추가한것
// 자주 사용하는 라이브러리를 여기에 등록해 사용할 수 있다(ex_axios)
app.use(router).use(store).mount('#app')
