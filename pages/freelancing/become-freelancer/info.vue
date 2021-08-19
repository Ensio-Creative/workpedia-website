<template>
  <div>
    <div class="container tutor-workpedia">
      <h1>Become a Workpedia Freelancer and Handyman</h1>
      <p class="texts-tutor">
        Be hired for local or remote jobs that fit your skills and schedule.
      </p>
      <p>With Workpedia, you have the freedom and support to be your own boss.</p>
    </div>
    <section class="container reasons-section">
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <h4>Be Your Own Boss</h4>
                <p>Work how, when and where you want. Offer services in 100+ categories and set a flexible schedule and work area.</p>
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
                <h4>Set Your Own Rate</h4>
                <p>Earn fair but competitive wages for your work.</p>
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
                <h4>Grow Your Business</h4>
                <p>We connect you with clients in your area or remotely for freelancers, and ways to market yourself - so you can focus on what you do best.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="get-started-div mt-5">
        <button
          class="btn btn-outline-primary"
          @click="$router.push('/freelancing/become-freelancer')"
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
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  components: { NewsLetter, Footer },
  data () {
    return {
      info: ''
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
      width: 656px;
      margin: auto;
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
