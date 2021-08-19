<template>
  <div class="container text-center my-5 pt-5">
    <h1
      v-if="error.statusCode === 404"
      class="mt-5"
    >
      Page not found
    </h1>
    <h1
      v-else
      class="mt-5"
    >
      An error occurred
    </h1>
    <div
      v-if="$nuxt.isOffline"
      class="network"
    >
      No internet connection
      <i class="fa fa-stop-circle" />
    </div>
    <NuxtLink to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['error']
}
</script>

<style lang="scss" scoped>

</style>
