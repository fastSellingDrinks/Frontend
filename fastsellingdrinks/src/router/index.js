//配置路由
import Router from 'vue-router'
import Vue from 'vue'

import Index from '../components/index/Index'
import Login from '../components/login/Login'
import Register from '../components/register/Register'
import Main from '../components/main/Main'
import Cart from '../components/cart/Cart'
import Combination from '../components/combination/Combination'
import NewProduct from '../components/newProduct/NewProduct'
import Rank from '../components/rank/Rank'

Vue.use(Router);
const router = new Router({
    routes:[
        {
            path:'/',
            component:Index
        },
        {
            path: '/login',
            component: Login
        },
        {
            path:'/register',
            component:Register
        },
        {
            path:'/main',
            component:Main
        },
        {
            path:'/cart',
            component:Cart
        },
        {
            path:'/combination',
            component:Combination
        },
        {
            path:'/newProduct',
            component:NewProduct
        },
        {
            path:'/rank',
            component:Rank
        }
    ]
});

export default router;