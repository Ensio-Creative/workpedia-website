<template>
  <div>
    <div class="container tutor-workpedia">
      <h1>Become a Workpedia Tutor</h1>
      <p class="texts-tutor">
        Get to personally tutor and interact with a wide range of students from primary to secondary as well as special skills and exams. Help these students achieve their full potential and make a difference in there academic pursuit.
      </p>
      <p>Workpedia matches tutors and learners in a seemless and efficient way.</p>
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
                <h4>Receive More Openings</h4>
                <p>Receive new tutor jobs and openings on regular basis.</p>
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
                <h4>Get Well Paid</h4>
                <p>Earn extra income to meet your financial goals and obligations while doing your work or engaging in academic pursuits.</p>
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
                <h4>Flexible Schedules</h4>
                <p>Flexible lesson time that fit into your schedule whether you're a part-time, full-time or school teacher.</p>
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
                <h4>Start Instantly</h4>
                <p>Registering as a tutor and getting your first tutoring job is as easy as ABC.</p>
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
                <h4>Friendly Support</h4>
                <p>Our responsive support team are at your beck and call and always eager to help.</p>
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
                <h4>It's Rewarding</h4>
                <p>Private tutoring is a very rewarding career.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="get-started-div mt-5">
        <button
          class="btn btn-outline-primary"
          @click="console.log('Worked')"
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
