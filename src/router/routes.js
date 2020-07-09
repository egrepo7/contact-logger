
const routes = [
  {
    path: '/',
    component: () => import('layouts/basic.vue'),
    children: [
      { path: '', component: () => import('pages/home-page.vue') },
      { path: '/home', component: () => import('pages/home-page.vue') },
      { path: '/home', component: () => import('pages/sign-up.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
