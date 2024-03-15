<script setup>
import { computed } from 'vue';

const props = defineProps({
  customer: {
    type: Object
  }
})

const customerName = computed(() => `${props.customer.name} ${props.customer.lastName}`)
</script>
<template>
  <tr>
    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
      <p class="font-medium text-gray-900">{{ customerName }}</p>
      <p class="text-gray-500">{{ customer.email }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
      <p class="text-gray-900 font-bold">{{ customer.company }}</p>
      <p class="text-gray-600">{{ customer.job }}</p>
    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm">

    </td>
    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
      <RouterLink to="/" class="text-indigo-600 hover:text-indigo-900 mr-5">Edit</RouterLink>
      <button class="text-red-600 hover:text-red-900">Delete</button>
    </td>
  </tr>
</template>