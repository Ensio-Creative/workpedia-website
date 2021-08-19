<template>
  <div class="auth">
    <div class="form-heading text-center pt-5 pb-4">
      <NuxtLink
        to="/"
      >
        <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
      </NuxtLink>
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
  name: 'AuthLayout'
}
</script>

<style scoped>
.auth {
  background: #f1f1ff;
}
.form-heading img{
  width: 83px;
}
h3{
  margin-top: 474px;
  margin-bottom: 100px;
  text-align: left;
  font: normal normal bold 30px/60px Archivo;
  letter-spacing: 0px;
  color: #000;
  opacity: 1;
}
</style>
