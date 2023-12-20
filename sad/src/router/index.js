import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
// import FeedBack from '../views/FeedBackView.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/feedBack",
    name: "feedBack",
    component: () => import("../views/feedBack.vue"),
  },
  {
    path: "/material",
    name: "material",
    component: () => import("../views/material.vue"),
  },
  {
    path: "/seller",
    name: "seller",
    component: () => import("../views/seller.vue"),
  },
  {
    path: "/process",
      name: "process",
      component: () => import("../views/process.vue"),
  },
  {
    path: "/customer",
      name: "customer",
      component: () => import("../views/customer.vue"),
  },
  {
    path: "/qrcode",
      name: "qrcode",
      component: () => import("../views/qrcode.vue"),
  },
  {
    
      path: "/procedure",
        name: "procedure",
        component: () => import("../views/procedure.vue"),
    
  },
  {
    path: "/image_1",
      name: "image_1",
      component: () => import("../views/image_1.vue"),
  },
  {
    path: "/image_2",
      name: "image_2",
      component: () => import("../views/image_2.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
