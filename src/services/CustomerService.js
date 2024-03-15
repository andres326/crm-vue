import api from '../lib/axios';

export default {
  getCustomers() {
    return api.get('/customer');
  },
  addCustomer(data) {
    return api.post('/customer', data);
  },
  getCustomerById(id) {
    return api.get(`/customer/${id}`);
  },
  updateCustomer(id, data) {
    return api.patch(`/customer/${id}`, data);
  },
  updateCustomerStatus(id, data) {
    return api.patch(`/customer/${id}`, data);
  },
  deleteCustomer(id) {
    return api.delete(`/customer/${id}`);
  },
};
