import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import TodoCard from '../components/TodoCard.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/todo-apps',
    name: 'Todo Apps',
    component: TodoCard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
