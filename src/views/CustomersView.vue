<script setup>
import RouterLink from '../components/ui/RouterLink.vue'
import Heading from '../components/ui/Heading.vue'

defineProps({
  title: {
    type: String
  }
})

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
</template>

