<template>
  <div>
    <div class="container faq text-center">
      <h1 class="faq-title">
        Frequently Asked
      </h1>
      <h1 class="faq-h1-question">
        Questions
      </h1>
    </div>
    <!-- <div class="about-background" /> -->
    <section class="faq-section">
      <div class="container">
        <div
          id="accordionFlushExample"
          class="accordion accordion-flush"
        >
          <div class="heading">
            <h1>Tutors</h1>
          </div>
          <div class="row justify-content-center">
            <div class="col-12 col-md-8">
              <div class="accordion-item">
                <h4
                  id="flush-headingOne"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseOne"
                    aria-expanded="false"
                    aria-controls="flush-collapseOne"
                  >
                    Where will the lessons take place?
                  </button>
                </h4>
                <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    Lessons hold in the comfort of your home or any other location as prescribed by parents. Alternatively, lessons can be delivered online by your preferred home tutor.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="accordion-item">
                <h4
                  id="flush-headingTwo"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseTwo"
                    aria-expanded="false"
                    aria-controls="flush-collapseTwo"
                  >
                    How does Workpedia verify their tutors?
                  </button>
                </h4>
                <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    Every Workpedia tutor is carefully vetted for subject expertise, personality, and safety. Workpedia will verify their government-issued ID cards, online profiles, as well as conduct comprehensive interviews, test their knowledge of each subject and extract guarantees and verify them to ensure your safety and peace of mind.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="accordion-item">
                <h4
                  id="flush-headingThree"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseThree"
                    aria-expanded="false"
                    aria-controls="flush-collapseThree"
                  >
                    How does payment work?
                  </button>
                </h4>
                <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    Lesson cost depends on your location, number of students and lesson duration. Payment can be done online or via bank transfer after the preferred tutor and number of learners and number of hours have been ascertained and you are ready to begin lessons.
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-8">
              <div class="accordion-item">
                <h4
                  id="flush-headingFour"
                  class="accordion-header"
                >
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#flush-collapseFour"
                    aria-expanded="false"
                    aria-controls="flush-collapseFour"
                  >
                    What if I’m not satisfied with my tutor?
                  </button>
                </h4>
                <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body">
                    In the unlikely event that you’re not satisfied with your tutor, we’ll immediately replace the tutor or refund your balance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <main class="container article-container">
      <article>
        <div class="article-item">
          <h4>Where will the lessons take place?</h4>
          <p>Lessons hold in the comfort of your home or any other location as prescribed by parents. Alternatively, lessons can be delivered online by your preferred home tutor.</p>
        </div>
        <div class="article-item">
          <h4>How does Workpedia verify their tutors?</h4>
          <p>Every Workpedia tutor is carefully vetted for subject expertise, personality, and safety. Workpedia will verify their government-issued ID cards, online profiles, as well as conduct comprehensive interviews, test their knowledge of each subject and extract guarantees and verify them to ensure your safety and peace of mind.</p>
        </div>
        <div class="article-item">
          <h4>How does payment work?</h4>
          <p>Lesson cost depends on your location, number of students and lesson duration. Payment can be done online or via bank transfer after the preferred tutor and number of learners and number of hours have been ascertained and you are ready to begin lessons.</p>
        </div>
        <div class="article-item">
          <h4>What if I’m not satisfied with my tutor?</h4>
          <p>In the unlikely event that you’re not satisfied with your tutor, we’ll immediately replace the tutor or refund your balance.</p>
        </div>
      </article>
    </main> -->
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  name: 'FAQ',
  // scrollToTop: true,
  components: { Footer, NewsLetter }
}
</script>

<style scoped>
.faq{
  margin-bottom: 0px;
  height: 22vh;
}
.faq-title {
  color: var(--bg-dark-blue);
  font-weight: bold;
  margin-top: 182px;
}
.faq-h1-question{
  color: var(--bg-dark-blue);
  font-weight: bold;
}
.faq-section {
  margin-top: 30px;
  margin-bottom: 80px;
}
.main-container{
  margin-bottom: 5rem;
  margin-top: 5rem;
}
.article-column {
  padding: 0px;
}
.article-column:nth-child(2) {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 45px;
}
.accordion-button {
  font-size: 20px;
  box-shadow: 0 0 0 rgba(13,110,253,.25) !important;
  color: #251E8C !important;
}
.accordion-button:focus {
    box-shadow: 0 0 0 rgba(13,110,253,.25) !important;
    color: #251E8C !important;
}
.article-container {
  margin-top: 85px;
  margin-bottom: 85px;
}
@media screen and (max-width: 780px){
  .faq-title {
    margin-top: 67px;
  }
  .accordion-button {
    font-size: 16px;
  }
}
</style>
