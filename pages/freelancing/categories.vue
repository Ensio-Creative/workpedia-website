<template>
  <div>
    <!-- Categories Nav -->
    <CategoryRoutes />
    <NuxtChild />
  </div>
</template>

<script>
import CategoryRoutes from '~/components/common/CategoryRoutes.vue'
export default {
  name: 'FreelanceCategories',
  components: { CategoryRoutes },
  data () {
    return {
      displaySidenav: false
    }
  }
}
</script>

<style scoped>
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: #2B7DC4;
}
</style>
