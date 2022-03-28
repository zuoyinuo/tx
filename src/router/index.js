import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [{
  path: "/",
  name: 'home',
  component: HomeView,
  redirect: "/jingxuan",
  children: [
    {
      path: "jingxuan", name: "MyJingXuan", component: () => import("../views/MyJingXuan.vue")
    },
    {
      path: "dianshiju", name: "MyDianShiJu", component: () => import("../views/MyDianShiJu.vue")
    },
    {
      path: "vip", name: "MyVip", component: () => import("../views/MyVip.vue")
    },
    {
      path: "nba", name: "MyNba", component: () => import("../views/MyNba.vue")
    },
    {
      path: "dianying", name: "MyDianYIng", component: () => import("../views/MyDianYIng.vue")
    },
    {
      path: "zongyi", name: "MyZongYi", component: () => import("../views/MyZongYi.vue")
    },
    {
      path: "dongman", name: "MyDongMan", component: () => import("../views/MyDongMan.vue")
    },
    {
      path: "shaoer", name: "MyShaoEr", component: () => import("../views/MyShaoEr.vue")
    },
    {
      path: "yule", name: "MyYuLe", component: () => import("../views/MyYuLe.vue")
    },
    {
      path: "youxi", name: "MyYouXi", component: () => import("../views/MyYouXi.vue")
    },
    {
      path: "youxi", name: "MyYouXi", component: () => import("../views/MyYouXi.vue")
    },
  ]
},
{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
}
]

const router = new VueRouter({
  routes
})

export default router