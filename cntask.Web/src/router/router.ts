import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store/store';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "main" */ '../views/Home.vue'),
    beforeEnter: (to: any, from: any, next: () => void) => {
      store.dispatch('getMailingGroups');
      next();
    },
  },
  {
    path: '/newemailgroup/:id?',
    name: 'newemailgroup',
    component: () => import(/* webpackChunkName: "main" */ '../views/NewMailingGroup.vue'),
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
