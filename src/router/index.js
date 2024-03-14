import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/CustomersView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Customers,
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: () => import('../views/NewCustomerView.vue'),
    },
  ],
});

export default router;
