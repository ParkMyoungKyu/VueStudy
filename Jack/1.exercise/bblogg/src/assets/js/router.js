import { createWebHashHistory, createRouter } from "vue-router";
import List from "../../components/List";
import Home from "../../components/Home";
import Detail from "../../components/Detail";
import Author from "../../components/Author";
import Comments from "../../components/Comments";

const routes = [
    {
        path: "/list",
        component: List,
    },
    {
        path: "/home",
        component: Home,
    },
    {
        path: "/detail/:id",
        component: Detail,
        children : [
            {
                path : "author",
                component: Author
            },
            {
                path : "comment",
                component: Comments
            }
        ]
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
