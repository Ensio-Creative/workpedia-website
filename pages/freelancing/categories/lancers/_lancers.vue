<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <FreelanceList
          :freelancers="fliteredFreelance"
        />
      </div>
    </section>
    <!-- <Testimony /> -->
    <!-- News Letter -->
    <NewsLetter />
    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  name: 'FreelanceRoutes',
  components: { NewsLetter, Footer },
  data () {
    return {
      routeUrl: this.$route.params.slug
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    fliteredFreelance () {
      return this.freelancing.filter(item => item.subCategories.includes(this.routeUrl))
    }
  }
}
</script>

<style scoped>
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
.categorie {
  margin-bottom: 8rem;
}
</style>
