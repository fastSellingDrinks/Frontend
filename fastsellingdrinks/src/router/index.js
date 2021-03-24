//配置路由
import Router from 'vue-router'
import Vue from 'vue'

import Login from '../components/login/Login'

Vue.use(Router);
const router = new Router({
    routes:[
        {
            path: '/login',
            component: Login
        }
    ]
});

export default router;