import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import MoviesPage from "../pages/MoviesPage.vue";
import NotFound from "../pages/NotFound.vue";


const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/about',
            name: 'About',
            component: AboutPage
        },
        {
            path: '/contact',
            name: 'contact',
            component: ContactPage
        },
        {
            path: '/movies',
            name: 'movies',
            component: MoviesPage
        },
        {
            path: '/:pathMatch(.*)*',
            name:'NotFound',
            component:NotFound
        }
    ]
})

export default router