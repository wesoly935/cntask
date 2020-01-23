import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import store from './store/store';
import vuetify from './plugins/vuetify';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.config.productionTip = false;
new Vue({
    router: router,
    store: store,
    vuetify: vuetify,
    render: function (h) { return h(App); },
}).$mount('#app');
Vue.use(VueAxios, axios);
//# sourceMappingURL=main.js.map