<template>
  <div>
    <div class="about text-center">
      <h1 class="about-title">
        We Are Workpedia
      </h1>
      <p class="about-text">
        We're your perfect gateway to hire a tutor, take your career to the next step and get connected to freelancers & handymen.
      </p>
    </div>
    <main class="container main-container">
      <div class="images-container">
        <div class="img-column" />
        <div class="img-column" />
        <div class="img-column" />
      </div>
      <div class="row justify-content-between">
        <div class="col-12 col-md-12 article-column">
          <article class="article">
            <div class="vision">
              <div class="vision-title">
                <h1>Our Vision</h1>
              </div>
              <div class="content">
                <p>
                  To be Africa’s Number 1 One-Stop Talent Solution Provider and Marketplace
                </p>
                <p>We understand the GAPS in the Job, Freelance and Handymen space which include:</p>
                <ul>
                  <li class="style-icons">
                    <i class="far fa-check-circle" /> Lack of Trust
                  </li>
                  <li class="style-icons">
                    <i class="far fa-check-circle" /> Difficulty in Accessing of Talents
                  </li>
                  <li class="style-icons">
                    <i class="far fa-check-circle" /> Poor Quality of Work
                  </li>
                  <li class="style-icons">
                    <i class="far fa-check-circle" /> Unfair Wages
                  </li>
                  <li><i class="far fa-check-circle" /> Safety & Security in Engaging Freelancers and Handymen</li>
                </ul>
                <p>And fixing these GAPS drives us in our mission.</p>
              </div>
            </div>
            <div class="vision">
              <div class="vision-title">
                <h1>Our Mission</h1>
              </div>
              <div class="content">
                <p>
                  Workpedia is revolutionizing and redefining work in Africa; we are providing seamless and easy to use platform for households and organizations to access large, vetted pool of quality, fairly priced and ready talents and in the process creating opportunities for African jobseekers, freelancers, handymen, tutors and other workers.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </main>
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  name: 'About',
  scrollToTop: true,
  components: { Footer, NewsLetter }
}
</script>
<style scoped>
ul {
  list-style-type: none;
  color: rgba(0,0,0,0.50196);
  padding-left: 1rem;
}
.about{
  margin-top: 180px;
  margin-bottom: 0px;
}
li{
  padding: 10px;
  color: var(--bg-dark-blue);
}
i {
  color: var(--bg-dark-blue);
}
.style-icons i::after {
  content: '';
  background-color: var(--bg-dark-blue);
  position: absolute;
  height: 28px;
  width: 2px;
  left: 443px;
  margin-top: 16px;
}
.about-title {
  color: #251E8C;
  font-weight: 600;
}
.about-text{
  width: 481px;
  margin: auto;
}
.main-container{
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.article-column {
  padding: 0px;
}
.images-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 100px;
}
.img-column{
  background-image: url('~static/img/workpedia-jobs-about.svg');
  padding: 165px;
  display: flex;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 20px;
}
.img-column:nth-child(2) {
  background-image: url('~static/img/workpedia-tutor-about.svg');
  padding: 210px;
  background-position: center;
}
.img-column:nth-child(3) {
  background-image: url('~static/img/workpedia-freelance-about.svg');
}
.vision{
  display: flex;
  justify-content: space-evenly;
}
.vision:nth-child(2) {
  margin-top: 5rem;
}
.vision-title {
  width: 30px;
  color: var(--bg-dark-blue);
}
.vision-title h1 {
  font-weight: bold;
}
.content {
  width: 540px;
}
@media screen and (max-width: 1205px) {
  .about {
    margin-top: 90px;
  }
  .about-text{
    width: 100%;
    margin: auto;
    padding: 8px;
  }
  .main-container {
    margin-bottom: 2rem;
    margin-top: 1rem;
  }
  .images-container {
      margin-bottom: 16px;
  }
  .img-column {
    padding: 54px;
  }
  .img-column:nth-child(2){
    padding: 52px;
  }

  .vision {
    display: block;
    padding: 20px;
  }
  .vision:nth-child(2) {
    margin-top: -2rem !important;
  }
  .content {
    width: 100%;
  }
  ul {
    padding-left: 0rem;
  }
  li{
  padding: 10px;
  }
  .style-icons i::after {
    content: '';
    background-color: var(--bg-dark-blue);
    height: 32px;
    width: 2px;
    margin-top: 14px;
    position: absolute;
    left: 37px;
  }
}
</style>
