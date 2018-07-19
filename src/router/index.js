import Vue from 'vue';
import Router from 'vue-router';
import login from '@/views/login';

Vue.use(Router);

// hidden 为 true 代表在导航栏里不显示
export const constantRouterMap = [{
    path: '/login',
    component: () =>
      import ('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/login',
    hidden: true
  },
  {
    path: '/404',
    component: () =>
      import ('@/views/404'),
    hidden: true
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export default new Router({
  routes: constantRouterMap
});
