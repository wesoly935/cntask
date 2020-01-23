import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        name: 'home',
        component: function () { return import(/* webpackChunkName: "main" */ '../views/Home.vue'); },
        beforeEnter: function (to, from, next) {
            store.dispatch('getMailingGroups');
            next();
        },
    },
    {
        path: '/newemailgroup/:id?',
        name: 'newemailgroup',
        component: function () { return import(/* webpackChunkName: "main" */ '../views/NewMailingGroup.vue'); },
        props: true,
    },
];
var router = new VueRouter({
    routes: routes,
});
export default router;
//# sourceMappingURL=router.js.map