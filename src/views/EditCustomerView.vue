<script setup>
import { onMounted, reactive } from 'vue';
import { FormKit } from '@formkit/vue'
import { useRoute, useRouter } from 'vue-router';
import CustomerService from '../services/CustomerService';
import RouterLink from '../components/ui/RouterLink.vue'
import Heading from '../components/ui/Heading.vue'

const router = useRouter()
const route = useRoute()

const { id } = route.params

const formData = reactive({
})

onMounted(async () => {
  try {
    const { data } = await CustomerService.getCustomerById(id)
    const { id: idCustomer, status, ...restOfProps } = data
    Object.assign(formData, restOfProps)
  } catch (error) {
    console.log(error)
  }
})

defineProps({
  title: {
    type: String
  }
})

const handleSubmit = async (data) => {
  try {
    await CustomerService.updateCustomer(id, data)
    router.push({ name: 'customers-list' })
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="flex justify-end">
    <RouterLink to="customers-list">Back</RouterLink>
  </div>
  <Heading>
    {{ title }}
  </Heading>
  <div class="mx-auto mt-10 shadow bg-white">
    <div class="mx-auto md:w-3/4 py-20 px-6">
      <FormKit type="form" submit-label="Save" @submit="handleSubmit" :value="formData">
        <FormKit type="text" label="Name" name="name" placeholder="Customer Name" validation="required"
          v-model="formData.name" />
        <FormKit type="text" label="Last Name" name="lastName" placeholder="Customer Last Name" validation="required"
          v-model="formData.lastName" />
        <FormKit type="email" label="Email" name="email" placeholder="Customer Email" validation="required|email"
          v-model="formData.email" />
        <FormKit type="text" label="Phone" name="phone" placeholder="Phone: XXX-XXX-XXXX"
          validation="+matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" :validation-messages="{ matches: 'Format is invalid' }"
          v-model="formData.phone" />
        <FormKit type="text" label="Company" name="company" placeholder="Customer Company" v-model="formData.company" />
        <FormKit type="text" label="Job" name="job" placeholder="Customer Job" v-model="formData.job" />
      </FormKit>

    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
