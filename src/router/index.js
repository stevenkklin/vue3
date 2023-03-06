import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView";
import NotFoundView from "../views/NotFoundView";
import RegisterView from "../views/RegisterView";
import UserProfileView from "../views/UserProfileView";
import UserListView from "../views/UserListView";

const routes = [
  {
    path: '/myspace/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/myspace/login/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/myspace/404/',
    name: '404',
    component: NotFoundView
  },
  {
    path: '/myspace/register/',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/myspace/userprofile/:userId/',
    name: 'userprofile',
    component: UserProfileView
  },
  {
    path: '/myspace/userlist/',
    name: 'userlist',
    component: UserListView
  },
  {
    path: '/myspace/:catchAll(.*)',
    redirect: '/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
