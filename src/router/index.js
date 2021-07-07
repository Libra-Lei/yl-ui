/*
 * @Description: 
 * @Author: Libra
 * @GitHub: https://github.com/Libra-Lei
 * @Date: 2021-02-01 10:11:48
 * @LastEditors: Libra
 * @LastEditTime: 2021-07-07 16:04:03
 */
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
      },
      {
        path: 'tag',
        name: 'Tag',
        component: () => import(/* webpackChunkName: "upload-mini" */ '../views/base/tag.vue')
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
      },
      {
        path: 'checkbox-group',
        name: 'CheckboxGroup',
        component: () => import(/* webpackChunkName: "checkbox-group" */ '../views/high/checkbox-group.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
