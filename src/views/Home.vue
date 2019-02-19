<template>
  <div class="home tw-p-2">
    <PaymentMethods/>
  </div>
</template>

<script>
// @ is an alias to /src
import PaymentMethods from '@/components/PaymentMethods.vue'

export default {
  name: 'home',
  components: {
    PaymentMethods
  }
}
</script>
