import { createWebHistory, createRouter } from "vue-router";
import List from '../components/List.vue';
import Home from '../components/Home.vue';
import ListDetail from '../components/Detail.vue';

const routes =[
    // path 경로로 접근했을 경우 해당 component를 보여줘라
    {
        path : "/list",
        component : List,
    },
    {
        path : "/",
        component : Home,
    },
    {
        path: "/detail",
        component : ListDetail,
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes, // 상단에 routes 라는 변수를 사용하겠다는것
})

export default router;
