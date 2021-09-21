// 应用中的所有路由
import Home from '../pages/Home'
import Community from '../pages/Community'
import My from '../pages/My'
const routes = [
    {
        path:'/',
        component:Home,
    },
    {
        path:'/community',
        component:Community
    },
    {
        path:'/me',
        component:My
    }
]
export default routes