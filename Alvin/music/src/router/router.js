import { createWebHistory, createRouter} from 'vue-router';
import Recent from "../components/Recent.vue";
import List from "../components/List.vue"
const routes =[
    {
        path : '/',
        component : List,
    },
    {
        path : '/recent',
        component : Recent,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;