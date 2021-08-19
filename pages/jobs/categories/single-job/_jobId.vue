<template>
  <div>
    <section
      v-if="foundJob"
      class="categorie mt-5 mb-5"
    >
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-10">
            <div class="row">
              <div
                class="col-12 col-md-12 col-lg-12 popular-column"
              >
                <div class="popular-column-heading">
                  <img src="~/static/img/workpedia-jobs-career.svg" alt="">
                  <h3>{{ foundJob.title }}</h3>
                  <p>{{ `${foundJob.city}, ${foundJob.state} ` }}</p>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ $moment(foundJob.createdAt).format('LL') }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ foundJob.duration }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>NGN {{ foundJob.amount }}</h6>
                  </span>
                </div>
                <div class="popular-text mt-3 mb-4">
                  <h4>Job Description</h4>
                  <p>
                    {{ foundJob.description }}
                  </p>
                </div>
                <button
                  v-b-modal.modal-lg
                  type="button"
                  class="btn btn-apply text-center"
                >
                  Apply Now
                </button>
                <div class="share pb-4">
                  <p class="">
                    Share this job
                  </p>
                  <ShareNetwork
                    network="facebook"
                    :url="urlVars"
                    :title="`Job opening for ${foundJob.title}`"
                    :image="logo"
                    :description="foundJob.description"
                    quote="Workpedia - Africa\'s one-stop tutor, jobs and freelance platform."
                    hashtags="workpedia.io, jobs"
                  >
                    <i class="fab fa-facebook-f" />
                  </ShareNetwork>
                  <ShareNetwork
                    network="twitter"
                    :url="urlVars"
                    :title="`Job opening for ${foundJob.title}`"
                    :image="logo"
                    :description="foundJob.description"
                    twitter-user="WorkpediaI"
                  >
                    <i class="fab fa-twitter" />
                  </ShareNetwork>
                  <ShareNetwork
                    network="linkedIn"
                    :url="urlVars"
                    :title="`Job opening for ${foundJob.title}`"
                    :image="logo"
                    :description="foundJob.description"
                  >
                    <i class="fab fa-linkedin-in" />
                  </ShareNetwork>
                  <ShareNetwork
                    network="whatsApp"
                    :url="urlVars"
                    :title="`Job opening for ${foundJob.title}`"
                    :image="logo"
                    :description="foundJob.description"
                  >
                    <i class="fab fa-whatsapp" />
                  </ShareNetwork>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="popular-jobs container mb-5">
      <div class="heading">
        <h1>Similar Jobs</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="job in randomJobs.slice(0, 3)"
          :key="job._id"
          class="col mt-4"
        >
          <client-only>
            <div class="card">
              <div class="card-body">
                <div class="popular-column-heading">
                  <img src="~/static/img/workpedia-jobs-career.svg" alt="">
                  <h3>{{ job.title }}</h3>
                  <p>{{ `${job.city}, ${job.state} ` }}</p>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ $moment(job.createdAt).format('LL') }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ job.duration }}</h6>
                  </span>
                </div>
                <div class="popular-button text-center">
                  <NuxtLink
                    :to="`/jobs/categories/single-job/${job._id}`"
                  >
                    View Now
                  </NuxtLink>
                </div>
              </div>
            </div>
          </client-only>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/jobs/categories">
          View All <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
    <!-- Model code -->
    <!-- The modal -->
    <b-modal
      v-if="foundJob"
      id="modal-lg"
      size="lg"
      :cancel-disabled="true"
      :ok-disabled="true"
    >
      <template #modal-title>
        <h5
          id="staticBackdropLabel"
          class="modal-title text-primary"
        >
          Application for {{ foundJob.title }}
        </h5>
      </template>
      <div class="contact-info">
        <!-- User img -->
        <div class="contact-detail">
          <div
            class="user-img"
            :style="{backgroundImage: 'url('+ `${envVarable}/${user.publicId}` +')'}"
          />
        </div>
        <div class="contact-detail">
          <!-- User name -->
          <h6><strong>{{ fullName }}</strong></h6>
          <!-- User Description -->
          <p>{{ address }}</p>
          <!-- User location -->
          <small class="gray">{{ user.address }} Nigeria</small>
        </div>
      </div>
      <form
        @submit.prevent="onSubmit"
      >
        <!-- Map the user info from vuex -->
        <div class="row">
          <div class="col-12 col-md-6">
            <AppControlInput
              v-model.trim="email"
              type="text"
              required
            >
              Email
            </AppControlInput>
            <!-- <small
              :class="[city.length < 3 ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small> -->
          </div>
          <div class="col-12 col-md-6">
            <AppControlInput
              v-model.trim="phone"
              type="text"
              required
            >
              Phone
            </AppControlInput>
            <!-- <small
              :class="[city.length < 3 ? 'info-error' : 'info-success']"
            >
              {{ cityInfo }}
            </small> -->
          </div>
        </div>
        <div class="p-2">
          <p>NOTE: We added your CV</p>
        </div>
      </form>
      <template #modal-footer="{ cancel}">
        <!-- Emulate built in modal footer ok and cancel button actions -->
        <b-button size="sm" variant="primary" @click="cancel()">
          Cancel
        </b-button>
        <b-button size="sm" variant="primary" @click="onSubmit(foundJob._id, foundJob.companyId, foundJob.userId)">
          Submit
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import logo from '~/assets/img/Workpedia logo transparent (Blue).png'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'SingleJob',
  components: { NewsLetter, Footer, AppControlInput },
  data () {
    return {
      logo,
      routeUrl: this.$route.params.jobId,
      email: '',
      envVarable: vars,
      urlVars: window.location.href,
      phone: '',
      amount: 1000000 // in kobo
    }
  },
  computed: {
    // Change the code to from using fliters
    ...mapState('jobs', ['jobs']),
    ...mapState('auth', ['user']),
    ...mapState('applicant', ['applicant']),
    foundJob () {
      const result = this.jobs.find(job => job._id === this.routeUrl)
      return result
    },
    randomJobs () {
      const result = this.jobs.filter(job => job.title.includes(this.foundJob.title))
      return result
    },
    fullName () {
      const name = this.user.firstName + ' ' + this.user.lastName
      return name
    },
    address () {
      const address = `${this.user.city} ${this.user.state}`
      return address
    }
  },
  mounted () {
    this.email = this.user.email
    this.phone = this.user.phone
  },
  methods: {
    ...mapActions('applicant', ['sendApplication']),
    onSubmit (jobID, companyID, userID) {
      if (!this.user.token) {
        this.$store.commit('HAS_ACCOUNT', false)
        this.$router.push('/auth')
        this.$toast.info('Please sign up')
        return
      }
      if (this.user.isApplicant && this.applicant.applyChance > 0) {
        // console.log({ job: jobId, Company: companyId, USer: userId })
        const payload = {
          jobId: jobID,
          companyId: companyID,
          userId: userID
        }
        this.sendApplication(payload)
      }
      if (this.user.isApplicant && !this.applicant.applyChance > 0) {
        this.$router.push('/jobs/subscribe')
      }
      if (!this.user.isApplicant) {
        this.$router.push('/jobs/register-applicant')
      }
    }
  },
  head () {
    return {
      title: `Workpedia - ${this.foundJob.title}`,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.foundJob.description
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: this.foundJob.title
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.logo
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.foundJob.description
        },
        {
          hid: 'twitter:',
          property: 'twitter:title',
          content: this.foundJob.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.foundJob.description
        },
        {
          hid: 'twitter:image',
          property: 'twitter:image',
          content: this.logo
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'twitter:card'
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.urlVars
        }
      ]
    }
  }
}
</script>

<style scoped>
.btn-apply{
  background-color: #251E8C;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  margin-bottom: 40px;
}

.btn-apply:hover{
  text-decoration: none;
}
.modal-body {
  padding: 1rem 3rem !important;
}
.popular-column-heading img {
  width: 44px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.contact-info{
  display: flex;
}
.contact-info p{
  margin: 0px !important;
}
.contact-info img{
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  background-clip: content-box;
  border: 2px solid transparent;
  border-radius: 49.9%;
}
.contact-detail:nth-child(2) {
  padding-left: 16px;
}
.contact-info small{
  color: rgba(0,0,0,.5);
}
.share p {
  font-weight: bold;
}
.share a i{
  font-size: 18px;
  color: var(--bg-dark-blue);
  padding-right: 20px;
}

.share a:hover {
  text-decoration: none;
  color: var(--bg-dark-blue);
}
</style>
