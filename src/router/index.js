import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/base/radio',
    hidden: true,
  },

  {
    path: '/base',
    component: () => import(/* webpackChunkName: "layout" */ '../layout'),
    children: [
      {
        path: 'icon',
        name: 'Icon',
        component: () => import(/* webpackChunkName: "icon" */ '../views/base/icon.vue')
      },
      {
        path: 'radio',
        name: 'Radio',
        component: () => import(/* webpackChunkName: "radio" */ '../views/base/radio.vue')
      },
      {
        path: 'upload-mini',
        name: 'UploadMini',
        component: () => import(/* webpackChunkName: "upload-mini" */ '../views/base/upload-mini.vue')
      }
    ]
  },

  {
    path: '/high',
    component: () => import(/* webpackChunkName: "layout" */ '../layout'),
    children: [
      {
        path: 'upload-table',
        name: 'UploadTable',
        component: () => import(/* webpackChunkName: "upload-table" */ '../views/high/upload-table.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
