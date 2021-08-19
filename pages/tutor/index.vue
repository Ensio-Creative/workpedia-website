<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-12 col-lg-6 bg-texts">
          <div class="bg-content">
            <h1>
              Hire vetted and experienced tutors for your kids on the go.
            </h1>
            <p>
              We provide you the opportunity to hire qualified tutors that will make a difference and become a part of your child's academic success and future.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="image-rap">
            <img src="~/static/img/workpedia-tutor.svg">
          </div>
        </div>
      </div>
    </section>
    <!-- About -->
    <section class="private-tutor">
      <div class="container">
        <div class="heading-private">
          <h1 class="text-white text-center mb-5">
            Let's walk you through
          </h1>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/request-start.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Place a Request</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Fill out the tutor request form and select a lesson schedule that matches your desired learning goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/select-tutor.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Tutor Selected</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    A tutor is selected with a notification sent to you via email based on your request.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="col"
          >
            <div class="card h-100">
              <div class="private-img-icon">
                <img src="~static/img/lesson-start.svg" alt="">
              </div>
              <div class="card-body">
                <div class="private-tutor-text">
                  <h4>Lesson Begins</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Lesson begins immediately payment is made which covers the duration of the lesson.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Popular -->
    <div class="container">
      <Tutors />
    </div>
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
import Tutors from '~/components/landing/Tutors.vue'
export default {
  components: { NewsLetter, Tutors, Footer },
  data () {
    return {}
  }
}
</script>

<style scoped>
.bg-hero{
  background-color: #fff;
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}
.bg-hero img {
  width: 623px;
  transform: scaleX(-1);
  margin-bottom: 20px;
}
.private-tutor {
  background-color: #251E8C;
  padding: 90px;
}
.private-img-icon {
  padding: 20px;
  height: 70px;
}
.private-tutor img {
  width: 63px;
}
.private-tutor-text {
    color: #fff;
    letter-spacing: 0px;
}
.card {
  background-color: #251E8C !important;
  border: 0px !important;
}
.card p {
  color: #fff !important;
  padding-top: 10px;
}

@media screen and (max-width: 780px) {
  .bg-hero img {
    width: auto;
  }
  .bg-texts {
    margin-top: 30px;
    text-align: center;
  }
  .private-tutor {
    padding: 90px 0px;
    margin-top: 5px;
  }
  .image-rap {
    margin-top: 0px;
    height: 116%;
    overflow: hidden;
  }
}
</style>
