import { createWebHistory, createRouter} from 'vue-router';
import Recent from "../components/Recent.vue";
import List from "../components/List.vue";
import Category from "../components/chart/Category.vue";
const routes =[
    {
        path : '/',
        component : List,
    },
    {
        path : '/recent',
        component : Recent,
    },
    {
        path : '/category',
        component : Category,
    }
]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

export default router;