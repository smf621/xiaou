import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:()=>import('@/pages/Home/Home'),
      children:[
        {
          path:'/home',
          redirect:"/home/index"
        },
        {
          path:'index',
          component:()=>import('@/pages/Home/Index')
        },
        {
          path:'cart',
          component:()=>import('@/pages/Home/Cart')
        },
        {
          path:'my',
          component:()=>import('@/pages/Home/My')
        },
      ]
    },
    {
      path:'/detail',
      component:()=>import('@/pages/Detail/Detail')
    },
    {
      path:'/category',
      component:()=>import('@/pages/Category/Category')
    },
    {
      path:'/login',
      component:()=>import('@/pages/Login/Login')
    },
    {
      path:'/register',
      component:()=>import('@/pages/Register/Register')
    },
  ]
})
