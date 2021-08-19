<template>
  <div>
    <nav
      class="navbar navbar-expand-lg categories-nav"
    >
      <button
        class="navbar-toggler categories-btn"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <p>Menu <i class="fas fa-chevron-down" /></p>
      </button>
      <div class="container text-center">
        <div
          id="navbarNav"
          class="collapse navbar-collapse justify-content-center"
        >
          <ul class="navbar-nav">
            <NuxtLink
              v-for="(route) in nav"
              :key="route.url"
              class="nav-link mr-3"
              :to="route.url"
            >
              {{ route.title }}
            </NuxtLink>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'JobsNavAdmin',
  data () {
    return {
      nav: [
        {
          title: 'Admin settings',
          url: '/admin/settings'
        },
        {
          title: 'Tutors',
          url: '/admin/settings/tutors'
        },
        {
          title: 'Jobs',
          url: '/admin/settings/jobs'
        },
        {
          title: 'Freelance/Handymen',
          url: '/admin/settings/freelance'
        }
      ]
    }
  }
}
</script>

<style scoped>
a {
  font-size: 18px;
  color: #0C0573;
}
.hire-nav-item:nth-child(1){
  border-right: 1px solid #000;
}
.hire-nav-item:nth-child(2){
  border-right: 1px solid #000;
}
.hire-nav-item:nth-child(3){
  border-right: 1px solid #000;
}

a.nuxt-link-active{
  color: #000;
}
.categories-nav{
  background-color: #fff;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.categories-btn{
  color: #fff;
  margin-top: 20px;
  width: 100%;
}
.categories-btn p {
  color: var(--bg-dark-blue);
}
.categories-btn i {
  font-size: 13px;
}
.categories-nav a:hover,
.categories-nav a:active,
.categories-nav a.nuxt-link-active {
  color: var(--bg-dark-blue);
}
</style>
