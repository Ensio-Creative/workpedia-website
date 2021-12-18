<template>
  <div>
    <div class="container contact text-center">
      <h1 class="contact-title">
        Contact Us
      </h1>
      <p class="contact-text">
        We'd love to talk about how we can help you.
      </p>
    </div>
    <section class="contact-info">
      <div class="container">
        <div class="row justify-content-around text-center">
          <div class="col-11 col-md-3 walk-column">
            <div class="img-head">
              <i class="fas fa-map-marker-alt" />
            </div>
            <div class="column-text">
              <p>1 Ogbugo Close, Off Okporo Road, Rumuodara, Port Harcourt, Nigeria.</p>
            </div>
          </div>
          <div class="col-11 col-md-3 walk-column">
            <div class="img-head">
              <i class="fas fa-phone" />
            </div>
            <div class="column-text">
              <p>
                +234 901 601 6563
                <br>
                +234 814 759 8640
              </p>
            </div>
          </div>
          <div class="col-11 col-md-3 walk-column">
            <div class="img-head">
              <i class="far fa-envelope" />
            </div>
            <div class="column-text">
              <p>info@workpedia.io </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="map-section">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7950.948591396321!2d7.031486010318754!3d4.859893815935783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d275aaea2649%3A0xf77e55615db55841!2s1%20Ogbugo%20Road%2C%20Umudara%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1620049523838!5m2!1sen!2sng"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
      />
    </section>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
export default {
  name: 'Contact',
  scrollToTop: true,
  components: { Footer }
}
</script>

<style scoped>
.contact{
  margin-top: 180px;
  margin-bottom: 0px;
}
.contact-title {
  color: var(--bg-dark-blue);
  font-weight: bold;
}
.contact-text{
  width: 481px;
  margin: auto;
}

.contact-info {
  margin-top: 5rem;
  margin-bottom: 7rem;
}

.img-head i {
  font-size: 40px;
  color: var(--bg-dark-blue);
}

.map-section {
  margin-bottom: -8px;
}
@media screen and (max-width: 769px) {
  .contact {
    margin-top: 80px;
  }
  .contact-text {
    width: 100%;
  }
  .contact-info {
    margin-top: 1rem;
  }
}
</style>
