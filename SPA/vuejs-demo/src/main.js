import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import i18n from './plugins/i18n'
import veeValidate from "./plugins/veevalidate";
import './registerServiceWorker'

Vue.config.productionTip = false

veeValidate.apply(Vue)


new Vue({
    router,
    store,
    vuetify,
    i18n,
    render: h => h(App)
}).$mount('#app')
