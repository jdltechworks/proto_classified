import Home from './containers/Home'
import Login from './containers/Login'
import Product from './containers/Product'
const routes = [
    { path: '/', component: Home, props: true },
    { path: '/login', component: Login, props: true },
    { path: '/product', component: Product, props: true }
]

export default routes