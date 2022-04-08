import { createWebHistory, createRouter } from 'vue-router';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import TodoCard from '../components/TodoCard.vue';
import Login from '../components/Login.vue';
import Profile from '../components/Profile.vue';
import TodoPinia from '../components/TodoPinia.vue';
import Users from '../components/Users.vue';

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
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/todo-pinia',
    name: 'Todo Pinia',
    component: TodoPinia,
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
