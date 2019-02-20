<template>
  <div>
    Payment Methods
    <PaymentMethods :merchantId='merchantId'/>
  </div>
</template>

<script>
import PaymentMethods from '@/components/PaymentMethods.vue'
export default {
  name:"paymentMethodsView",
  components: {
    PaymentMethods
  },
  props: ['merchantId'],
}
</script>

