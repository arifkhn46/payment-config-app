<template>
  <div class="tw-bg-white tw-p-2">
    <h3>Payment Methods</h3>
    <div v-if="paymentMethods.length">
      <ul id="payment-methods-list" class="tw-list-reset">
        <li v-for="paymentMethod in paymentMethods"
          v-bind:key="paymentMethod.id"
          class="tw-p-2">
          {{ paymentMethod.name.toUpperCase() }}
        </li>
      </ul>
    </div>
    <h1 v-else>
      No payment methods are available!
    </h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      paymentMethods: []
    }
  },
  created () {
    axios.get('http://localhost:3000/payment-methods')
      .then(response => (this.paymentMethods = response.data))
  }
}
</script>
