<template>
  <div class="tw-bg-white tw-p-2">
    <div v-if="paymentMethods.length">
      <ul id="payment-methods-list" class="tw-list-reset">
        <li v-for="paymentMethod in paymentMethods"
          v-bind:key="paymentMethod.id"
          class="tw-p-2">
          {{ paymentMethod.name.toUpperCase() }}
        </li>
      </ul>
    </div>
    <div v-else>
      No payment methods are available!
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'paymentMethodsComponent',
  props: ['merchantId'],
  data () {
    return {
      paymentMethods: [],
      selectedMerchant: null
    }
  },
  created () {
    axios.get('http://localhost:3001/payment-methods/' + this.merchantId)
      .then(response => (this.paymentMethods = response.data))
  }
}
</script>
