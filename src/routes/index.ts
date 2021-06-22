import { lazy } from 'react';
import loadComp from '@/components/LoadComp';

const routes = [
  { 
    path: '/',
    name: '首页',
    component: loadComp(lazy(() => import('@/pages/home'))),
  },
  {
    path: '/hello',
    name: 'hello',
    component: loadComp(lazy(() => import('../pages/hello'))),
  }
];

export default routes;
