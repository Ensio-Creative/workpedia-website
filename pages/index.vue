<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around bg-item">
        <div class="col-12 col-md-12 col-lg-5 bg-texts">
          <div class="bg-content">
            <h1>
              Find tutors, jobs, freelancers & handymen all in one place.
            </h1>
            <p>
              Workpedia allows you to get everything in one place; tutors, jobs and freelancing opportunity and manage all three with ease.
            </p>
          </div>
          <client-only>
            <div
              class="bg-buttons"
            >
              <a
                class="view-btn"
                href="#"
                @click="pushToDashboard"
              >
                Get Started
              </a>
            </div>
          </client-only>
        </div>
        <div class="col-12 col-md-12 col-lg-7">
          <div class="image-rap text-center">
            <img src="~/static/img/workpedia-home-image.svg">
          </div>
        </div>
      </div>
    </section>
    <!-- Walk you through -->
    <Walk />
    <section class="tutor-details">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 learn-more">
            <img src="@/static/img/workpedia-tutor.svg" alt="">
          </div>
          <div class="col-12 col-md-12 col-lg-6 learn-more">
            <h2 class="title">
              Hire a Tutor
            </h2>
            <p>We understand that with exceptional and personalized coaching, learners (be it your children or yourself) can master any subject or course of interest and attain lofty acedemic height.</p>
            <NuxtLink
              to="/tutor"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <section class="tutor-details">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 order-6 order-sm-2 learn-more-grid">
            <h2 class="title">
              Apply for Jobs
            </h2>
            <p>Workpedia seemlessly connects employers and vetted qualified employees in one place.</p>
            <NuxtLink
              to="/jobs"
            >
              Learn more
            </NuxtLink>
          </div>
          <div class="col-12 col-md-12 col-lg-6 order-2 order-sm-6 learn-more-grid">
            <img src="@/static/img/workpedia-jobs.svg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section class="tutor-details mb-5">
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-6 learn-more">
            <img src="@/static/img/workpedia-freelancer.svg" alt="">
          </div>
          <div class="col-12 col-md-12 col-lg-6 learn-more">
            <h2 class="title">
              Connect with Freelancers & Handymen
            </h2>
            <p>Linking freelancers and vetted handymen to tasks in homes, offices and sites have never been easier.</p>
            <NuxtLink
              to="/freelancing"
            >
              Learn more
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import Footer from '../components/common/Footer.vue'
import NewsLetter from '../components/common/NewsLetter.vue'
import Walk from '../components/landing/Walk.vue'
export default {
  name: 'Home',
  components: { Walk, NewsLetter, Footer },
  data () {
    return {
      isLogged: false
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    checkIfLoggedIn () {
      const result = !this.user.token
      return result
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    ...mapMutations('jobs', ['UPDATE_JOBS']),
    ...mapMutations('freelance', ['UPDATE_FREELANCING', 'UPDATE_FREELANCING_CATEGORIES']),
    ...mapMutations('tutors', ['UPDATE_TUTOR_ROUTES']),
    ...mapActions('auth', ['pushToDashboard']),
    goToDashboard () {
      this.pushToDashboard()
    },
    checkUSer () {
      if (!this.user.token) {
        this.isLogged = false
      } else {
        this.isLogged = true
      }
    },
    async fetchData () {
      const res = await this.$axios.$get('public/get-data')
      this.UPDATE_FREELANCING(res.freelancers)
      this.UPDATE_FREELANCING_CATEGORIES(res.freelanceCategories)
      this.UPDATE_JOBS(res.jobs)
      this.UPDATE_TUTOR_ROUTES(res.tutorCategories)
    }
  }
}
</script>

<style scoped>
  .bg-texts {
    margin-top: 23px;
    text-align: center;
  }
  .bg-hero {
    height: 112vh;
  }
  .bg-item {
    margin-top: 1rem !important;
  }
  .bg-content {
    margin-top: 25px;
  }
  .image-rap {
    margin-top: 0px;
  }
  .bg-hero img {
    width: 325px;
    margin-bottom: 0px;
    height: 271px;
    border-radius: 0px;
  }
  .learn-more{
    margin-bottom: 0px;
    /* text-align: center; */
  }
  .learn-more h2 {
    color: var(--bg-dark-blue);
    font-weight: bold;
  }
  .learn-more:nth-child(2){
    margin-bottom: 40px;
    text-align: center;
  }
  .learn-more p {
    width: auto;
    text-align: center;
  }
  .learn-more p {
    margin-bottom: 20px;
    padding-bottom: 20px;
  }
  .learn-more a {
    padding: 12px;
    border: 1px solid var(--bg-dark-blue);
    color: var(--bg-dark-blue);
    border-radius: 30px;
  }

  .learn-more-grid {
    display: block;
    margin-bottom: 40px;
    text-align: center;
  }
  .learn-more-grid h2{
    color: var(--bg-dark-blue);
    font-weight: bold;
  }
  .learn-more-grid:nth-child(2) {
    display: block;
    margin-bottom: 0px;
    text-align: center;
  }
  .learn-more-grid p {
  width: auto;
  padding-bottom: 20px;
}
.learn-more-grid a {
  padding: 10px;
  border: 1px solid var(--bg-dark-blue);
  color: var(--bg-dark-blue);
  border-radius: 30px;
  display: block;
  width: 116px;
  margin: auto;
}
  .learn-more img {
    width: auto;
  }
  .learn-more-grid img {
    width: auto;
  }

@media screen and (min-width: 994px){
  .bg-hero {
    height: 86vh;
  }
  .bg-item {
    margin-top: 3rem !important;
  }
  .bg-hero img{
    width: 640px;
    border-radius: 15px;
    height: 100%;
  }
  .bg-texts {
    display: grid;
    justify-content: center;
    align-items: flex-end;
    text-align: left;
  }
  .bg-content {
    width: 339px;
    margin-top: 152px;
  }
  .image-rap {
    margin-top: 24px;
    height: 100%;
    overflow: visible;
  }
  .learn-more {
    align-self: center;
    text-align: left !important;
  }
  .learn-more p{
    width: 450px;
    text-align: left !important;
  }
  .learn-more-grid {
    display: grid;
    justify-content: end;
    align-self: center;
    text-align: left !important;
  }
  .learn-more-grid p {
    width: 400px;
  }
  .learn-more-grid a {
    margin: inherit;
  }
}
</style>
