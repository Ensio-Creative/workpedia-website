<template>
  <div>
    <div class="container tutor-workpedia">
      <h1>Hire in Workpedia</h1>
      <p class="texts-tutor">
        Workpedia is designed to help you source and manage your next hire faster, seamlessly and at almost a zero cost.
      </p>
      <p class="texts-tutor">
        At Workpedia, we understand that sourcing for the right talents can sometimes feel like searching for a tiny needle in a gigantic heap of haystack; very hectic, complicated, time-consuming process. There’s a better way out there—one that kills duplication of effort, saves time and money, and lets you focus on hiring the best candidates for your business.
      </p>
      <p class="texts-tutor">
        Workpedia is your one-stop hiring solution that helps you connect with the right talents faster, less costly and seamlessly.
      </p>
    </div>
    <section class="container reasons-section">
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div
          class="col mt-4"
        >
          <div class="card h-80">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Access to large pool of vetted and competent candidates.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column2">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Screening of resumes.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Scheduling of interviews.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Assessments and evaluation of candidates.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Extraction of guarantors from candidates.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <p>Background checks on candidates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="get-started-div mt-5">
        <button
          class="btn btn-outline-primary"
          @click="goToDashboard"
        >
          Get Started
        </button>
      </div>
    </section>
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  components: { NewsLetter, Footer },
  data () {
    return {
      info: ''
    }
  },
  methods: {
    ...mapActions('auth', ['pushToDashboard']),
    goToDashboard () {
      this.pushToDashboard()
    }
  }
}
</script>

<style lang="scss" scoped>
.tutor-workpedia {
  text-align: center;
  margin-top: 80px;
  margin-bottom: 0px;

  h1 {
    color: var(--bg-dark-blue);
  }
  .texts-tutor {
    padding-top: 16px;
  }
}
.reasons-section {
  margin-top: 84px;
  margin-bottom: 84px;

  h2 {
    color: var(--bg-dark-blue);
    text-align: center;
  }
  .card {
    background-color: var(--bg-dark-blue);
    height: 330px;
    border-radius: 15px;
  }
  p {
    color: #fff;
  }
  .reason-icon {
    text-align: center;
  }
  .reason-icon i {
    font-size: 39px;
    color: #07c1db;
    padding-top: 11px;
    padding-bottom: 30px;
  }
  .get-started-div{
    width: 166px;
    margin: auto;
  }
  .btn {
    border-radius: 30px;
    width: 165px;
    height: 50px;
    font-weight: bold;
  }
}
@media screen and (min-width: 994px) {
  .tutor-workpedia {
    text-align: center;
    margin-top: 180px;
    margin-bottom: 0px;

    h1 {
      color: var(--bg-dark-blue);
    }
    .texts-tutor {
      width: 646px;
      margin: auto;
      padding-top: 16px;
    }
  }
  .reasons-section {
    margin-top: 84px;
    margin-bottom: 84px;

    h2 {
      color: var(--bg-dark-blue);
      text-align: center;
    }
    .card {
      background-color: var(--bg-dark-blue);
      height: 270px;
      border-radius: 15px;
    }
    p {
      color: #fff;
    }
    .reason-icon {
      text-align: center;
    }
    .reason-icon i {
      font-size: 39px;
      color: #07c1db;
      padding-top: 11px;
      padding-bottom: 30px;
    }
    .get-started-div{
      width: 166px;
      margin: auto;
    }
    .btn {
      border-radius: 30px;
      width: 165px;
      height: 50px;
      font-weight: bold;
    }
  }
}
</style>
