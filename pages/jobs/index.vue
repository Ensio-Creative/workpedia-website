<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-12 col-lg-6 bg-texts">
          <div class="bg-content">
            <h1>
              Finding new jobs become easier with us.
            </h1>
            <p>
              We help you to find new jobs and connect with employers from different sectors that guarantees your career next step.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="image-rap">
            <img src="~/static/img/workpedia-jobs.svg">
          </div>
        </div>
      </div>
    </section>
    <section class="container reasons-section">
      <div class="heading">
        <h1 class="text-center">
          Getting Started
        </h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        <div
          class="col col-lg-6 mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <img src="~/static/img/jobseeker.svg" alt="">
              </div>
              <div class="text-white">
                <h4>For Jobseekers</h4>
                <ul>
                  <li>Register and create your profile with all the requisite details including your CV.</li>
                  <li>Search for jobs and apply once your profile becomes active for application.</li>
                  <li>Workpedia and the employers will contact you for further tests and interviews if your profile and experiences matches the job requirements.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col col-lg-6 mt-4"
        >
          <div class="card h-80 card-column3">
            <div class="card-body">
              <div class="reason-icon">
                <img src="~/static/img/hirer.svg" alt="">
              </div>
              <div class="text-white">
                <h4>For Hirers</h4>
                <ul>
                  <li>Create your profile and post available jobs in your organization.</li>
                  <li>You will receive CVs based on the posted job requirements.</li>
                  <li>Vet and invite successful applicants for interview.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="get-started">
      <div class="container">
        <h1 class="get-started-heading text-center mb-5">
          Getting Started
        </h1>
        <div class="row justify-content-between">
          <div class="col-12 col-md-6 get-started-column" />
          <div class="col-12 col-md-6 get-started-column">
            <article class="my-3">
              <h4 class="article-heading">
                For Jobseekers
              </h4>
              <ul>
                <li>Register and create your profile with all the requisite details including your CV.</li>
                <li>Search for jobs and apply once your profile becomes active for application.</li>
                <li>Workpedia and the employers will contact you for further tests and interviews if your profile and experiences matches the job requirements.</li>
              </ul>
            </article>
            <article class="my-5">
              <h4 class="article-heading">
                For Hirers
              </h4>
              <ul>
                <li>Create your profile and post available jobs in your organization.</li>
                <li>You will receive CVs based on the posted job requirements.</li>
                <li>Vet and invite successful applicants for interview.</li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Popular -->
    <Popular
      class="mb-5"
    />
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
import Popular from '~/components/landing/Popular.vue'
export default {
  name: 'Jobs',
  components: { Footer, NewsLetter, Popular },
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.bg-hero{
  /* background-image: url('~assets/img/Macbook.jpeg'); */
  background-color: #fff;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}

.bg-hero img{
  width: 623px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.get-started{
  color: #fff;
  background-color: #251E8C;
  padding: 50px;
}
.get-started-column:nth-child(1) {
  background-image: url('~static/img/workpedia-jobs-get-started.svg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.reasons-section {
  margin-bottom: 64px;

  // h1 {
  //   color: var(--bg-dark-blue);
  //   text-align: center;
  //   font-weight: bold;
  // }
  .card {
    background-color: var(--bg-dark-blue);
    height: 480px;
    border-radius: 15px;
  }
  p {
    color: #fff;
  }
  .reason-icon {
    text-align: left;
  }
  .reason-icon img {
    width: 63px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .get-started-div{
    width: 166px;
    margin: auto;
  }
  li {
    padding-top: 10px;
  }
}
@media screen and (min-width: 994px) {
  .reasons-section{
    .card{
      height: 394px;
    }
  }
}
@media screen and (max-width: 780px){

  .bg-hero{
    height: 90vh;
  }
  .bg-texts {
    margin-top: 30px;
    text-align: center;
  }
  .bg-hero img {
    width: auto;
    transform: scaleX(-1);
    margin-bottom: 20px;
  }

  .search-input {
    width: 293px;
  }
  .search-btn{
    margin-left: 0px;
  }
  .get-started{
    padding: 50px 0px;
    margin-top: 0px;
  }
  .get-started-column:nth-child(1) {
    padding: 140px;
  }
  .image-rap {
    margin-top: 0px;
    height: 116%;
    overflow: hidden;
  }
}
</style>
