import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
    ],
  },

  // HU 01
  {
    path: '/amaris/users',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/amaris/Clasificacion/Users/Users.vue'), },
      { path: 'crear', component: () => import('src/pages/amaris/Clasificacion/Users/Crear/Crear.vue') },
      { path: 'editar/:id', component: () => import('src/pages/amaris/Clasificacion/Users/Editar/Editar.vue') },
    ]
  },
  // HU 02
  {
    path: '/amaris/employee',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/amaris/Clasificacion/Employee/Employee.vue') },
      { path: 'crear', component: () => import('pages/amaris/Clasificacion/Employee/Crear/Crear.vue') },
      { path: 'editar/:id', component: () => import('pages/amaris/Clasificacion/Employee/Editar/Editar.vue') },]
  },

];


export default routes;
