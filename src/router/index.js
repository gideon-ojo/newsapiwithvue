import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../components/DefaultLayout.vue'
import Home from '../views/Home.vue'
import Tech from '../views/Entertainment.vue'
import Entertainment from '../views/Tech.vue'
import Sport from '../views/Sport.vue'
import Business from '../views/Business.vue'
import Searchquery from '../components/Searchquery.vue'
/* import { Capitalize } from '../functions/utility' */




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: DefaultLayout,
            children:[
                { 
                    path: '/home',
                    name: 'home',
                    component: Home
                },
                { 
                    path: '/technews',
                    name: "technews",
                    component: Tech
                },
               /*  {path: '/search', name: 'searchNews', component: Searchquery, children: [
                    {
                        path: '',
                        component: Searchquery,
                        props: (route) => ({ query: route.query.q})
                    }
                ]}, */
                { 
                    path: '/entertainmentnews',
                    name: "entertainmentnews",
                    component: Entertainment
                }, 
                { 
                    path: '/sportnews',
                    name: 'sportnews',
                    component: Sport
                },
                { 
                    path: '/businessnews',
                    name: 'businessnews',
                    component: Business
                },
               
               
            ]
        }
       
    ],
   
})
/*  router.beforeEach((to, from, next) => {
  document.title = Capitalize(to.name);
  

    next();
 }) */
export default router;