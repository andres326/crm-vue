import { createRouter, createWebHistory } from 'vue-router';
import Customers from '../views/CustomersView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'customers-list',
      component: Customers,
      props: { title: 'Customers List' },
    },
    {
      path: '/add-customer',
      name: 'add-customer',
      component: () => import('../views/NewCustomerView.vue'),
      props: { title: 'Add Customer' },
    },
  ],
});

export default router;
