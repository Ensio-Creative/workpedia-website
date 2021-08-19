<template>
  <div>
    <div class="container tutor-workpedia">
      <h1>Why Hire A Workpedia Tutor?</h1>
      <p class="texts-tutor">
        Give your child some advantages that will make a difference in your child's success & future. Here's how and why.
      </p>
    </div>
    <section class="container reasons-section">
      <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
        <div
          class="col mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body text-center">
              <div class="reason-icon">
                <i class="far fa-check-circle" />
              </div>
              <div class="text-white text-center">
                <h4>Dedicated and Individualized Attention</h4>
                <p>Receive the full attention of a dedicated private tutor.</p>
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
                <h4>Customized Lessons</h4>
                <p>Lessons tailored to your child's strengths and weaknesses.</p>
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
                <h4>Better Results</h4>
                <p>Your child achieves excellence and better results due to more attention and coaching.</p>
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
                <h4>Increased Confidence</h4>
                <p>As your child sees progress, s/he naturally gains confidence.</p>
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
                <h4>Flexible & Convenient</h4>
                <p>Save time and effort. Get tutored comfortably at home.</p>
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
                <h4>Homework Help</h4>
                <p>Keep up with classmates with regular coaching.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="get-started-div mt-5">
        <button
          class="btn btn-outline-primary"
          @click="$router.push('/tutor/subject/get-tutor')"
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
      width: 889px;
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
