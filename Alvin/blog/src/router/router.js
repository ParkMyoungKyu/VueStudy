import { createWebHistory, createRouter } from "vue-router";
import List from '../components/List.vue';
import Home from '../components/Home.vue';
import ListDetail from '../components/Detail.vue';
import Author from "../components/Author.vue";
import Comment from "../components/Comment.vue"
const routes =[
    // path 경로로 접근했을 경우 해당 component를 보여줘라
    {
        path : '/list',
        component : List,
    },
    {
        path : '/',
        component : Home,
    },
    {
        path: '/detail/:index',
        component : ListDetail,
        children : [
            {
                path : 'comment',
                component : Author,
            },
            {
                path : 'author',
                component : Comment,
            },
        ]
    },
];

const router = createRouter({
    history : createWebHistory(),
    routes, // 상단에 routes 라는 변수를 사용하겠다는것
})
router.beforeEach((to,from) => {
    console.log("이동전 URL : " + from.fullPath);
    console.log("이동후 URL : "+to.fullPath);
})
export default router;
