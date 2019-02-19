<template>
  <div id="app" class="tw-bg-grey-lighter">
    <div id="nav">
      <ul class="tw-list-reset">
        <li>
          <router-link class="tw-no-underline" to="/">Home</router-link>
        </li>
        <li>
          <router-link class="tw-no-underline" to="/about">About</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
import '@/assets/styles/app.scss'
export default {

}
</script>
