<template>
  <div>
    <div
      class="container my-3"
      :class="bgHero"
    />
    <!-- Categories Nav -->
    <nav
      class="navbar navbar-expand-lg"
      :class="urlColors"
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
        <p>Categories <i class="fas fa-chevron-down" /></p>
      </button>
      <div class="container text-center">
        <div
          id="navbarNav"
          class="collapse navbar-collapse justify-content-center"
        >
          <ul class="navbar-nav mt-5">
            <NuxtLink
              class="nav-link active"
              :to="`/${allCategories}/categories`"
            >
              All Categories
            </NuxtLink>
            <NuxtLink
              v-for="(route) in routes"
              :key="route.url"
              class="nav-link mr-3"
              :to="`${checkUrl}${route.url}`"
            >
              {{ route.title }}
            </NuxtLink>
            <input
              v-if="$route.path.includes('/tutor/categories')"
              v-model="searchTutorInput"
              class="filter-input"
              type="search"
              placeholder="Search"
              @input="searchTutor"
            >
            <input
              v-if="$route.path === '/freelancing/categories'"
              v-model="searchFreelanceInput"
              class="filter-input"
              type="search"
              placeholder="Search"
              @input="searchFreelance"
            >
            <input
              v-if="$route.path.includes('/freelancing/categories/')"
              v-model="searchFreelanceInputSub"
              class="filter-input"
              type="search"
              placeholder="Search"
              @input="searchFreelanceSub"
            >
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'CategoryRoutes',
  data () {
    return {
      freelanceRoutes: [],
      tutors: [],
      search: '',
      searchTutorInput: '',
      searchFreelanceInput: '',
      searchFreelanceInputSub: ''
    }
  },
  computed: {
    ...mapState('freelance', ['freelanceCategories']),
    ...mapState('tutors', ['tutorRoutes']),
    routes () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        const sliceRoutes = this.tutors.slice(0, 0)
        route = sliceRoutes
      } else if (this.$route.path.includes('/freelancing')) {
        const sliceRoutes = this.freelanceRoutes.slice(0, 2)
        route = sliceRoutes
      }
      return route
    },
    checkUrl () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        route = '/tutor/categories/'
      } else if (this.$route.path.includes('/freelancing')) {
        route = '/freelancing/categories/'
      }
      return route
    },
    allCategories () {
      let route = ''
      if (this.$route.path.includes('/tutor')) {
        route = 'tutor'
      } else if (this.$route.path.includes('/freelancing')) {
        route = 'freelancing'
      }
      return route
    },
    urlColors () {
      let color = ''
      if (this.$route.path.includes('/tutor')) {
        color = 'categories-nav'
      } else if (this.$route.path.includes('/freelancing')) {
        color = 'freelancecategories-nav'
      }
      return color
    },
    bgHero () {
      let bg = ''
      if (this.$route.path.includes('/tutor')) {
        bg = 'bg-categories'
      } else if (this.$route.path.includes('/jobs')) {
        bg = 'bg-jobs-categories'
      } else if (this.$route.path.includes('/freelancing')) {
        bg = 'bg-freelance-categories'
      }
      return bg
    }
  },
  mounted () {
    this.freelanceRoutes = this.freelanceCategories
    this.tutors = this.tutorRoutes
  },
  methods: {
    ...mapActions('freelance', ['searchCategories', 'searchCategoriesSub']),
    ...mapActions('tutors', ['searchTutorCategories']),
    searchTutor () {
      this.searchTutorCategories(this.searchTutorInput)
      // console.log(this.searchFreelanceInput)
    },
    searchFreelance () {
      this.searchCategories(this.searchFreelanceInput)
      // console.log(this.searchFreelanceInput)
    },
    searchFreelanceSub () {
      this.searchCategoriesSub(this.searchFreelanceInputSub)
      // console.log(this.searchFreelanceInputSub, 'sub')
    }
  }
}
</script>

<style scoped>
.bg-categories {
  background-image: url('~static/img/workpedia-tutor-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-jobs-categories {
  background-image: url('~static/img/workpedia-jobs-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.bg-freelance-categories {
  background-image: url('~static/img/workpedia-freelancers-header.svg');
  height: 80vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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
.freelancecategories-nav{
  background-color: #fff;
}
.freelancecategories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.freelancecategories-nav a:hover,
.freelancecategories-nav a:active,
.freelancecategories-nav a.nuxt-link-active {
  color: var(--bg-dark-blue);
}
@media screen and (max-width: 780px){
  .bg-categories {
    height: 26vh;
  }
  .bg-freelance-categories {
    height: 26vh;
  }
}
.navbar-expand-lg .navbar-nav .nav-link {
  font-size: 17px;
}
</style>
