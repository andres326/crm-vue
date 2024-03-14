<script setup>
import { FormKit } from '@formkit/vue'
import RouterLink from '../components/ui/RouterLink.vue'
import Heading from '../components/ui/Heading.vue'

defineProps({
  title: {
    type: String
  }
})

const handleSubmit = (data) => {
  console.log(data)
}
</script>
<template>
  <div class="flex justify-end">
    <RouterLink to="home">Back</RouterLink>
  </div>
  <Heading>
    {{ title }}
  </Heading>
  <div class="mx-auto mt-10 shadow">
    <div class="mx-auto md:w-3/4 py-20 px-6">
      <FormKit type="form" submit-label="Add" @submit="handleSubmit">
        <FormKit type="text" label="Name" name="name" placeholder="Customer Name" validation="required" />
        <FormKit type="text" label="Last Name" name="lastName" placeholder="Customer Last Name" validation="required" />
        <FormKit type="email" label="Email" name="email" placeholder="Customer Email" validation="required|email" />
        <FormKit type="text" label="Phone" name="phone" placeholder="Phone: XXX-XXX-XXXX"
          validation="+matches:/^[0-9]{3}-[0-9]{3}-[0-9]{4}$/" :validation-messages="{ matches: 'Format is invalid' }" />
        <FormKit type="text" label="Company" name="company" placeholder="Customer Company" />
        <FormKit type="text" label="Job" name="job" placeholder="Customer Job" />
      </FormKit>

    </div>
  </div>
</template>
<style>
.formkit-wrapper {
  max-width: 100%;
}
</style>
