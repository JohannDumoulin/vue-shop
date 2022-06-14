import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import Home from './components/Home.vue'
import ProductContainer from './components/ProductContainer.vue'
import ProductPage from './components/ProductPage.vue'
// @ts-ignore
import { createRouter, createWebHistory } from 'vue-router'
import './index.css'

const routes = [
    { path: '/', component: Home },
    { path: '/products', component: ProductContainer },
    { path: '/product/:id', component: ProductPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
})

// 5. Create and mount the root instance.
const app = createApp(App)
app.use(router)
app.use(createPinia())

app.mount('#app')
