import { createApp } from 'vue' //從vue模組引入方法createApp
import './style.css'    
import App from './App.vue' //引入同一層底下的App.vue

createApp(App).mount('#app')    //傳入App組件創建實體，並調用mount方法安裝至id = app的地方，指向index.html
