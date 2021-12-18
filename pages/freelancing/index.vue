<template>
  <div>
    <section class="bg-hero container">
      <div class="row justify-content-around mt-5">
        <div class="col-12 col-md-12 col-lg-6 bg-texts">
          <div class="bg-content">
            <h1>
              Connect seamlessly with freelancers and handymen.
            </h1>
            <p>
              Have your project and work done by amazing freelancers and handymen in a faster and better way than you could possibly imagine.
            </p>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-6">
          <div class="image-rap">
            <img src="~static/img/workpedia-freelancer.svg">
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
                <img src="~static/img/workpedia-freelancer-signup.svg" alt="">
              </div>
              <div class="card-body mt-4">
                <div class="private-tutor-text">
                  <h4>Sign Up</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Create your account to have access to freelancers and handymen.
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
                <img src="~static/img/workpedia-freelancer-search.svg" alt="">
              </div>
              <div class="card-body mt-4">
                <div class="private-tutor-text">
                  <h4>Find</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Find freelancers and handymen that best suits your projects.
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
                <img src="~static/img/workpedia-freelancer-connect.svg" alt="">
              </div>
              <div class="card-body mt-4">
                <div class="private-tutor-text">
                  <h4>Connect</h4>
                </div>
                <div class="private-tutor-info">
                  <p>
                    Get in touch with the freelancers and handymen to further enquire on their skills, charge and avalibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Freelancing gigs -->
    <Freelancing
      frelance-gigs="Connect with Freelancers & Handymen"
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
import Freelancing from '~/components/landing/Freelancing.vue'
export default {
  name: 'FreelanceingLandingPage',
  scrollToTop: true,
  components: { NewsLetter, Footer, Freelancing },
  data () {
    return {
      displaySidenav: false
    }
  },
  head: {
    title: 'workpedia.io - freelance'
  }
}
</script>

<style scoped>
.bg-hero{
  background-color: #fff;
}
.image-rap {
  margin-top: 48px;
  height: 116%;
  overflow: hidden;
}
.bg-hero img{
  width: 623px;
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
.images img{
  width: 70px;
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
@media screen and (max-width: 780px){
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
  .find-private-column img {
    width: 305px;
    transform: scaleX(-1);
  }
  .private-tutor {
    padding: 90px 0px;
    margin-top: 29px;
  }
  .image-rap {
    margin-top: 0px;
    height: 116%;
    overflow: hidden;
  }
}
</style>
