<template>
  <div>
    <main class="container">
      <div class="row my-5 justify-content-center">
        <div class="col-12">
          <div class="row my-5 justify-content-center">
            <div class="col-12 col-md-4">
              <div
                class="user-image mb-5"
                :style="{backgroundImage: 'url('+ `${envVarables}/${tutorUser.publicId}` +')'}"
              />
            </div>
            <div class="col-12 col-md-4">
              <h6>Name</h6>
              <p>{{ `${tutorUser.firstName} ${tutorUser.lastName}` }}</p>
              <h6>Location</h6>
              <p>{{ `${tutorUser.city} ${tutorUser.state}` }}</p>
              <h6>Subject(s)</h6>
              <p>{{ tutorDetails.tutorSubject }}</p>
              <h6>Description</h6>
              <p>{{ tutorDetails.description }}</p>
              <h6>Workpedia comment</h6>
              <p>{{ extraInfoFromAdmin }}</p>
            </div>
            <div class="col-12 col-md-4">
              <h6>Lesson charge</h6>
              <form
                @submit.prevent="initPay"
              >
                <AppControlInput
                  v-model="amount"
                  type="number"
                  disabled
                >
                  Amount
                </AppControlInput>
                <AppButton
                  type="submit"
                  class="btn-blue my-4"
                >
                  Proceed to make payment
                </AppButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import Footer from '~/components/common/Footer.vue'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'SingleTutor',
  components: { Footer, AppButton, AppControlInput },
  layout: 'tutors',
  data () {
    return {
      routeUrl: this.$route.params.index,
      tutorDetails: '',
      tutorUser: {},
      extraInfoFromAdmin: '',
      amount: 200,
      envVarables: vars,
      requestId: ''
    }
  },
  computed: {
    ...mapState('tutors', ['fetchedTutors'])
  },
  mounted () {
    this.getInfo()
  },
  methods: {
    async initPay () {
      try {
        const payload = {
          email: this.tutorUser.email,
          callback_url: `${process.env.BASE_URL}/api/pay/tutor-callback`,
          amount: this.amount,
          purpose: 'Tutor payment',
          category: 'Tutors',
          requestId: this.requestId
        }
        const res = await this.$axios.$post(
          'pay/init-pay',
          payload
        )
        window.location.href = res.url
      } catch (error) {
        if (error.response.status === 422) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 401) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 402) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 400) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error('Something went wrong')
        }
      }
    },
    async getInfo () {
      try {
        const res = await this.$axios.$get(`tutors/sent-tutor/${this.routeUrl}`)
        console.log(res)
        this.tutorDetails = res.sendTutor.tutorId
        this.tutorUser = res.sendTutor.tutorUserId
        this.extraInfoFromAdmin = res.sendTutor.extraInfo
        this.amount = res.sendTutor.pay
        this.requestId = res.sendTutor.tutorRequestId
      } catch (error) {
        if (error.response.status === 422) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 404) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 401) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 402) {
          this.$toast.error(error.response.data.message)
        } else if (error.response.status === 400) {
          this.$toast.error(error.response.data.message)
        } else {
          this.$toast.error('Something went wrong')
        }
      }
    }
  }
}
</script>

<style scoped>
.bg-tutor{
  padding: 50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 485px;
  background-position: center;
}
.heading{
  text-align: center;
  color: #fff;
}
.tutors-btns{
  margin: auto;
  width: 511px;
  padding-top: 117px;
  text-align: center;
}
.btn-blue{
  background-color: var(--bg-dark-blue);
}
.test-text{
  margin-top: 0;
  margin-bottom: 0rem;
}
</style>
