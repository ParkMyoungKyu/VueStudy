import { createWebHistory, createRouter } from "vue-router";
import List from './components/List.vue'
import Home from './components/Home.vue'
import Detail from './components/detail.vue'
import Author from './components/Author.vue'
import Comment from './components/Comment.vue'

const routes = [
  {
    path: "/list",
    component: List,
  },
  {//동일한 경우 순서의 우선 순위
    path: "/",
    component: Home,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children:[
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  {
    path: "/:anything(.*)",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 