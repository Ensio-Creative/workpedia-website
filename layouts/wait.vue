<template>
  <div>
    <div class="container wait-header">
      <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
    </div>
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  name: 'WaittLayout',
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style>
.wait-header {
  padding-top: 20px;
  padding-bottom: 20px;
}

.wait-header img {
  width: 60px;
}
</style>
