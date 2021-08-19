<template>
  <div>
    <section class="bg-wait">
      <div class="container">
        <div class="row">
          <div class="row">
            <div class="col-12 col-md-6 bg-wait-half">
              <div class="content">
                <h6>COMING SOON...</h6>
                <h1>Workpedia</h1>
                <p>
                  Africa’s one-stop tutors, jobs and freelance platform.
                </p>
                <div class="input-area my-3">
                  <label for="email">Get notified when we launch</label>
                  <input
                    id="email"
                    v-model="email"
                    class="filter-input"
                    type="email"
                    placeholder="Enter your email"
                  >
                  <button
                    :disabled="!validEmail(email)"
                    class="filter-btn"
                    @click="sendEmail"
                  >
                    Notify Me
                  </button>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 bg-wait-half">
              <img src="~/static/img/LAUNCH UI 2 IMAGE.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="footer">
      <div class="container">
        <p>
          &copy; {{ date.getFullYear() }} Workpedia - All rights reserved.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WaitList',
  layout: 'wait',
  data () {
    return {
      email: '',
      date: new Date()
    }
  },
  methods: {
    async sendEmail () {
      try {
        const res = await this.$axios.$post('public/subcribe-newsletter',
          { email: this.email }
        )
        this.email = ''
        this.$toast.success(res.message)
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
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-wait {
  height: 100vh;

    h6 {
      color: var(--bg-light-blue);
    }
    .content {
      padding-top: 40px;
    }
    h1 {
      font-weight: bold;
      color: var(--bg-dark-blue);
      padding: 1px 0px 10px 0px;
    }
    p {
      font-size: 18px;
      padding: 1px 0px;
    }
    .filter-input {
      padding: 10px 0px 10px 5px;
      width: 191px;
    }
    .filter-btn {
      padding: 10px 20px;
      background-color: var(--bg-light-blue);
    }
    .bg-wait-half {

      img {
        padding-top: 30px;
        width: 344px;
      }
      label {
        color: #a5a5a5 !important;
        font-weight: normal;
      }
    }
  }
  .footer {
    background-color: var(--bg-dark-blue);
    p {
      padding: 50px 0px;
      margin: 0px;
      color: #fff;
      font-size: 12px;
    }
  }
@media screen and (min-width: 1000px) {
  .bg-wait {
    height: 100%;
    margin-top: 50px;
    margin-bottom: 60px;
    .content {
      padding-top: 0px;
    }
    h6 {
      color: var(--bg-light-blue);
    }
    h1 {
      font-weight: bold;
      color: var(--bg-dark-blue);
    }
    p {
      font-size: 18px;
      width: 328px;
    }
    .filter-input {
      width: 315px;
    }
    .bg-wait-half {
      .content {
        padding-top: 90px;
      }
      img {
        padding-top: 0px;
        padding-bottom: 0px;
        width: 620px;
      }
      label {
        color: #a5a5a5 !important;
        font-weight: normal;
      }
    }
  }
}
</style>
