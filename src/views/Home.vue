<template>
  <div class="home tw-p-2">
    <!-- <PaymentMethods/> -->
    <h3>Select a merchant</h3>
    <div class="tw-flex tw-mt-6 tw-w-full tw-flex-col md:tw-flex-row md:tw-justify-center tw-mt-4">
      <router-link
        to="/payment-methods/1"
        class="tw-text-center tw-no-underline tw-font-bold tw-py-2 tw-px-4 tw-rounded tw-bg-blue tw-text-white"
      >Floweraura</router-link>
      <router-link
        to="/payment-methods/2"
        class="tw-text-center tw-no-underline tw-mt-2 md:tw-mt-0 md:tw-ml-4 tw-bg-transparent tw-hover:bg-blue tw-text-blue-dark tw-font-semibold tw-hover:text-white tw-py-2 tw-px-4 tw-border tw-border-blue tw-hover:border-transparent tw-rounded"
      >Bakingo</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home'
}
</script>
