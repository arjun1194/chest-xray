
const routes = [
  {
    path: '/',
    component: () => import('layouts/HomeLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Login.vue') },
      { path: '/signup', component: () => import('pages/Home/Signup.vue') }
    ]
  },
  {
    path: '/home',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Main/Index.vue') },
      { path: '/history', component: () => import('pages/Main/history.vue') },
      { path: '/info', component: () => import('pages/Main/Info.vue') },
      { path: '/contact', component: () => import('pages/Main/Contact.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
