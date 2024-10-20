import { createRouter, createWebHistory } from "vue-router";
import UsersPage from "@/views/UsersPage.vue";
import Authentication from "@/views/Authentication.vue";
import { auth } from "@/firebase/init";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Authentication
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/views/Dashboard.vue'),
        },
        {
            path: '/user',
            name: 'user',
            component: UsersPage,
            meta: {
                authRequired: true
            }
        },
        {
            path: '/:catchAll(.*)',
            name: 'NotFound',
            component: () => import('@/views/NotFound.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.authRequired)) {
        auth.onAuthStateChanged((user) => {
            if (user) {
                if(auth.currentUser.displayName === null){
                    next({ path: '/' });
                }
                
                next();
            } else {
                next({ path: '/' });
            }
        })
        
    } else {
        next();
    }
})

export default router;