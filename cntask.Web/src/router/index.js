import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
Vue.use(VueRouter);
var routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: function () { return import(/* webpackChunkName: "about" */ '../views/About.vue'); },
    },
];
var router = new VueRouter({
    routes: routes,
});
export default router;
//# sourceMappingURL=index.js.map