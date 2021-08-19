<template>
  <div class="footer">
    <div class="container">
      <div class="row justify-content-between">
        <div class="col-12 col-lg-3">
          <div
            class="footer-title"
            @click="showRoute"
          >
            <img src="~/assets/img/Workpedia logo transparent (White).png" alt="">
          </div>
          <p class="footer-text">
            Africa's one-stop tutors, jobs and freelance platform.
          </p>
        </div>
        <div class="col-12 col-lg-8 mobile-row-top">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-4">
              <h5 class="footer-head">
                Workpedia
              </h5>
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/about-us"
                >
                  About us
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/faq"
                >
                  FAQs
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/contact"
                >
                  Contact
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="privacy"
                >
                  Terms & Privacy
                </NuxtLink>
                <!-- <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Terms of Service
                </NuxtLink> -->
                <!-- <NuxtLink
                  class="footer-nav-item"
                  to="/"
                >
                  Help and Support
                </NuxtLink> -->
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-5">
              <h5 class="footer-head">
                Explore
              </h5>
              <div class="footer-nav">
                <NuxtLink
                  class="footer-nav-item"
                  to="/tutor/info"
                >
                  Hire a Tutor
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/jobs"
                >
                  Find a Job
                </NuxtLink>
                <NuxtLink
                  class="footer-nav-item"
                  to="/freelancing"
                >
                  Hire Freelancers/Handymen
                </NuxtLink>
              </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-3 mobile-margin-top">
              <h5 class="footer-head">
                Contact
              </h5>
              <p class="footer-email">
                info@workpedia.io
              </p>
              <p class="footer-phone">
                +234 901 601 6563
                <br>
                +234 814 759 8640
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr>
      <div class="all-rights">
        <p class="rights">
          &copy; {{ date.getFullYear() }} Workpedia - All rights reserved.
        </p>
        <div class="">
          <div class="footer-social">
            <a href="https://facebook.com/theworkpedia" target="_blank">
              <i class="fab fa-facebook-f" />
            </a>
            <a href="https://twitter.com/theworkpedia" target="_blank">
              <i class="fab fa-twitter" />
            </a>
            <a href="https://instagram.com/theworkpedia" target="_blank">
              <i class="fab fa-instagram" />
            </a>
            <a href="https://linkedin.com/company/theworkpedia" target="_blank">
              <i class="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      date: new Date()
    }
  },
  methods: {
    showRoute () {
      console.log(this.$route.path)
    }
  }
}
</script>

<style scoped>
.footer{
  background-color: var(--bg-dark-blue);
  padding: 69px 0px 20px 0px;
  color: #fff;
}
.footer p{
  color: #fff;
}
.footer-head {
  font-weight: bold;
  color: var(--bg-yellow) !important;
}
.footer-title img{
  width: 63px;
}
.footer-title h1{
  padding-top: 10px;
  padding-left: 20px;
  font-size: 30px;
}

/* .footer-social{
  padding-top: 20px;
} */
.footer-social a i{
  font-size: 18px;
  color: #fff;
  padding-right: 20px;
}

.footer-social a:hover {
  text-decoration: none;
  color: #fff;
}
.footer-nav a:hover{
 text-decoration: none;
}
.footer-nav-item a:hover{
  text-decoration: none;
}

/* .all-rights{
  padding-top: 20px;
  padding-bottom: 30px;
} */
hr {
  background: #fff;
  margin-top: 50px;
  margin-bottom: 45px;
  opacity: 0.4;
}
.all-rights p {
  font-size: 13px;
}
.mobile-margin-top{
    font-size: 13px;
  }
  /* Mobile */
  .footer-title{
    display: block;
  }
  .footer-text {
    padding-top: 30px;
    font-size: 17px;
  }
  .footer-nav-item{
    display: block;
    color: #fff;
    line-height: 2;
    padding: 5px;
    font-size: 17px;
  }
  .all-rights {
    display: block;
    margin-bottom: 69px;
    text-align: center;
  }
  .mobile-row-top{
    margin-top: 20px;
  }
  .footer-head{
    margin-top: 20px;
  }
  .mobile-margin-top{
    font-size: 17px;
  }
@media screen and (min-width: 994px) {
  .footer-title{
    display: flex;
  }
  .footer-text {
    padding-top: 30px;
    font-size: 13px;
  }
  .footer-nav-item{
    font-size: 13px;
  }
  .mobile-row-top{
    margin-top: 0px;
  }
  .all-rights {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    margin-bottom: 0px;
  }
  .mobile-margin-top{
    font-size: 13px;
  }
}
</style>
