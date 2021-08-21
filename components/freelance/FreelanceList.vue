<template>
  <div>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div
        v-for="lancer in paginatedResults"
        :key="lancer._id"
        class="col"
      >
        <div class="card h-100 p-4">
          <div
            class="user-image"
            :style="{backgroundImage: 'url('+ `${envVarables}/${lancer.userId.publicId}` +')'}"
          />
          <div class="card-body text-center">
            <div class="private-tutor-text">
              <h3>{{ `${lancer.userId.firstName} ${lancer.userId.lastName}` }}</h3>
            </div>
            <div class="private-tutor-info">
              <p>{{ lancer.title }}</p>
              <div
                v-if="lancer.skills"
                class="freelancer-skills text-center mb-4"
              >
                <span
                  v-for="skill in lancer.skills.split(',')"
                  :key="skill"
                  class="skills mt-2"
                >
                  {{ skill }}
                </span>
              </div>
              <!-- <p>NGN {{ lancer.serviceCharge }}</p> -->
            </div>
            <div
              id="accordionFlushExample"
              class="accordion accordion-flush mt-3"
            >
              <div class="accordion-item">
                <h4
                  id="flush-headingOne"
                  class="accordion-header"
                >
                  <button
                    class="btn btn-outline-primary collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    :data-bs-target="`#flush-collapse${lancer.userId.firstName}`"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    See more
                  </button>
                </h4>
                <div
                  :id="`flush-collapse${lancer.userId.firstName}`"
                  class="accordion-collapse collapse"
                  aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample"
                >
                  <div class="accordion-body">
                    {{ lancer.description }}
                  </div>
                  <button
                    class="btn btn-outline-primary mt-3"
                    @click="getFreelancerId(lancer._id, lancer.userId.firstName, lancer.userId.lastName)"
                  >
                    Message {{ `${lancer.userId.firstName} ${lancer.userId.lastName}` }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="page mt-5">
      <b-pagination
        v-if="freelancers.length"
        v-model="currentPage"
        pills
        :per-page="perPage"
        :total-rows="freelancers.length"
        @change="onPageChanged"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'FreelanceList',
  props: {
    freelancers: {
      type: Array,
      requried: true,
      default: () => {}
    }
  },
  data () {
    return {
      envVarables: vars,
      message: '',
      freelancerId: '',
      author: '',
      paginatedResults: [],
      perPage: 18,
      currentPage: 1
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    skillsList () {
      return this.freelancers.skill
    }
  },
  watch: {
    freelancers: {
      immediate: true,
      handler () {
        this.paginate(this.perPage, 0)
      }
    }
  },
  methods: {
    ...mapActions('freelance', ['sendMessage']),
    paginate (pageSize, pageNumber) {
      const itemsToParse = this.freelancers
      this.paginatedResults = itemsToParse.slice(
        pageNumber * pageSize,
        (pageNumber + 1) * pageSize
      )
      console.log(this.paginatedResults)
    },
    onPageChanged (page) {
      this.paginate(this.perPage, page - 1)
    },
    getFreelancerId (id, firstName, lastName) {
      this.freelancerId = id
      this.author = `${firstName} ${lastName}`
    },
    onSubmit () {
      if (!this.user.token) {
        this.$store.commit('HAS_ACCOUNT', false)
        this.$router.push('/auth')
        this.$toast.info('Please sign up')
        return
      }
      if (!this.user.freelanceHire) {
        this.$router.push('/freelancing/subscribe')
        return
      }
      if (!this.message.length) {
        this.$toast.error('Add a message')
        return
      }
      const payload = {
        message: this.message,
        freelancerId: this.freelancerId
      }
      this.sendMessage(payload)
    }
  }
}
</script>

<style scoped>
.skills {
  padding: 8px;
  margin: 4px 1px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: bold;
}
.accordion-button:focus {
    z-index: 3;
    border-color: #000;
        border-right-color: #000;
        border-left-color: #000;
    outline: 0;
    box-shadow: 0 0 0 .25rem transparent;
}
.accordion-button::after {
    flex-shrink: 0;
    width: 0px;
    height: 1.25rem;
    margin-left: auto;
    content: 0px;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='%23212529'%3e%3cpath fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-size: 1.25rem;
    transition: transform .2s ease-in-out;
}
.accordion-button:not(.collapsed) {
    color: #000;
    background-color: transparent;
}
.accordion-item:last-of-type .accordion-collapse {
    border-bottom-width: 0px;
    border-bottom-right-radius: .25rem;
    border-bottom-left-radius: .25rem;
}
.btn {
  border-radius: 2.25rem !important;
}
</style>
