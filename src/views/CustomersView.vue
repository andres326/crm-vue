<script setup>
import { onMounted, ref, computed } from 'vue';
import CustomerService from '../services/CustomerService'
import RouterLink from '../components/ui/RouterLink.vue'
import Heading from '../components/ui/Heading.vue'
import Customer from '../components/Customer.vue';

defineProps({
  title: {
    type: String
  }
})

const customers = ref([])

onMounted(async () => {
  try {
    const { data } = await CustomerService.getCustomers()
    customers.value = data
  } catch (error) {

  }
})
const hasCustomers = computed(() => customers.value.length > 0)

const updateCustomerStatus = async ({ id, status }) => {
  try {
    await CustomerService.updateCustomerStatus(id, { status: !status })
    const i = customers.value.findIndex(elem => elem.id === id)
    customers.value[i].status = !status
  } catch (error) {
    console.log(error)
  }
}

const deleteCustomer = async (id) => {
  try {
    await CustomerService.deleteCustomer(id)
    customers.value = customers.value.filter(elem => elem.id !== id)
  } catch (error) {
    console.log(error)
  }
}

</script>
<template>
  <div class="flex justify-end">
    <RouterLink to="add-customer">
      Add Customer
    </RouterLink>
  </div>
  <Heading>
    {{ title }}
  </Heading>
  <div v-if="hasCustomers" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
    <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <table class="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Name</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Company</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Status</th>
              <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 bg-white">
            <Customer v-for="customer in customers" :key="customer.id" :customer="customer"
              @update-status="updateCustomerStatus" @delete-customer="deleteCustomer" />
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <p v-else class="text-center mt-10">There are not customers yet</p>
</template>

