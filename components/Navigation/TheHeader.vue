<template>
  <div class="header-container">
    <header class="the-header container">
      <div class="nav-img">
        <NuxtLink to="/">
          <img src="~/assets/img/Workpedia logo transparent (Blue).png" alt="">
        </NuxtLink>
      </div>
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />
      <div
        :class="[$route.path.includes('/tutor') ? 'navigation-items-tutor' : 'navigation-items']"
      >
        <ul class="nav-list">
          <li
            v-for="links in routes"
            :key="links.url"
            :class="[$route.path.includes('/tutor') ? 'nav-item-tutor' : 'nav-item']"
          >
            <NuxtLink
              class="mt-3"
              :to="links.url"
            >
              {{ links.title }}
            </NuxtLink>
          </li>
        </ul>
        <UserSign />
      </div>
    </header>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import TheSideNavToggle from '@/components/Navigation/TheSideNavToggle.vue'
import UserSign from '../common/UserSign.vue'
import homeNav from '~/static/baseNav/home.js'
import tutorNav from '~/static/baseNav/tutor.js'
import jobsNav from '~/static/baseNav/jobs.js'
import freelanceNav from '~/static/baseNav/freelance.js'
export default {
  name: 'TheHeader',
  components: { UserSign, TheSideNavToggle },
  // Every data been imported has Nav added to it that the inital routes
  // Then the other ones are the data gotten from filtering the initial data
  data () {
    return {
      homeNav,
      tutorNav,
      jobsNav,
      freelanceNav,
      tutor: [],
      jobs: [],
      freelance: []
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    // The function here is using the data filtered already when the compnent was mounted
    routes () {
      let route = ''
      if (this.$route.path === '/' || this.$route.path === '/about-us' || this.$route.path === '/contact' || this.$route.path === '/faq') {
        route = this.homeNav
      } else if (this.$route.path.includes('/tutor')) {
        route = this.tutor
      } else if (this.$route.path.includes('/jobs')) {
        route = this.jobs
      } else if (this.$route.path.includes('/freelancing')) {
        route = this.freelance
      }
      return route
    }
  },
  watch: {
    user: {
      immediate: true,
      handler () {
        this.checkTutorNav()
        this.checkJobs()
        this.checkFreelance()
      }
    }
  },
  methods: {
    // Here are the functions used by there names
    checkTutorNav () {
      if (this.user.isTutor) {
        this.tutor = this.tutorNav.filter(tutorRoute => tutorRoute.url !== '/tutor/become-a-tutor')
        return this.tutor
      } else {
        this.tutor = this.tutorNav
      }
    },
    checkJobs () {
      if (this.user.isApplicant || this.user.isHire) {
        this.jobs = this.jobsNav.filter(jobsRoute => jobsRoute.url !== '/jobs/hire')
        return this.jobs
      } else {
        this.jobs = this.jobsNav
      }
    },
    checkFreelance () {
      if (this.user.isFreelancer) {
        this.freelance = this.freelanceNav.filter(freelanceRoute => freelanceRoute.url !== '/freelancing/become-freelancer')
        return this.freelance
      } else {
        this.freelance = this.freelanceNav
      }
    }
  }
}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: 60px;
  background-color: #fff;
}

.the-header {
  display: flex;
  color: var(--bg-dark-blue);
  padding: 20px 18px;
  justify-content:space-between;
}

.logo {
  margin: 0 10px;
  font-size: 1.3rem;
}

.spacer {
  /* flex: 1; */
  width: 529px;
}

.navigation-items {
  display: none;
}

.navigation-items-tutor {
  display: none;
}

@media (min-width: 994px) {
  .header-container {
    position: fixed;
    top: 0px;
    z-index: 1000;
    width: 100%;
    height: 70px;
    background-color: #fff;
  }
  .navigation-items {
    display: flex;
    width: 675px;
    justify-content: space-between;
  }
  .navigation-items-tutor {
    display: flex;
    width: 745px;
    justify-content: space-between;
  }
  .header-container {
  background-color: #fff;
}
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  font-size: 18px;
}

.nav-item {
  margin: 0 10px;
  padding-top: 5px;
  padding-left: 5px;
}
.nav-item-tutor {
  margin: 0 10px;
  padding-top: 5px;
  padding-left: 5px;
}

.nav-item a {
  text-decoration: none;
  color: var(--bg-dark-blue);
}
.nav-item-tutor a {
  text-decoration: none;
  color: var(--bg-dark-blue);
}

.nav-item-tutor a:hover,
.nav-item-tutor a:active,
.nav-item-tutor a.NuxtLink-active {
  color: rgb(138, 138, 138);
}
.nav-item a:hover,
.nav-item a:active,
.nav-item a.NuxtLink-active {
  color: rgb(138, 138, 138);
}
</style>
