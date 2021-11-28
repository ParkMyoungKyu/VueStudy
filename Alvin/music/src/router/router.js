import { createWebHistory, createRouter} from 'vue-router';
import Recent from "../components/Recent.vue";
import List from "../components/List.vue";
import Category from "../components/chart/Category.vue";
import MyList from "../components/chart/MyList.vue";

const routes =[
    {
        path : '/music',
        component : List,
    },
    {
        path : '/recent',
        component : Recent,
    },
    {
        path : '/category',
        component : Category,
    },
    {
        path: '/myList',
        component: MyList,
    }

]

const router = createRouter({
    history : createWebHistory(),
    routes,
})

router.beforeEach((to,from) => {
    console.log("이동전 URL : " + from.fullPath);
    console.log("이동후 URL : "+to.fullPath);
})

export default router;