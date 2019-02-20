<template>
  <div id="app" class="tw-bg-grey-lighter tw-p-2 tw-h-screen">
    <div id="nav">
      <ul class="tw-list-reset">
        <li>
          <router-link class="tw-no-underline" to="/">Home</router-link>
        </li>
      </ul>
    </div>
    <router-view class="tw-bg-white tw-h-screen"/>
  </div>
</template>

<script>
import '@/assets/styles/app.scss'
export default {

}
</script>
