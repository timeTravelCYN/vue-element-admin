import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '../views/layout/Layout'
// hidden 为 true 代表在导航栏里不显示
export const constantRouterMap = [{
    path: '/login',
    component: () =>
      import ('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/404')
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: {
      title: 'Example',
      icon: 'example'
    },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/404'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/404'),
        meta: {title: 'Tree', icon: 'tree' }
      }
    ]
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
