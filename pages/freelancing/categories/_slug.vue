<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="route in fliteredFreelancing"
            :key="route.url"
            class="col mt-4"
          >
            <NuxtLink
              :to="`/freelancing/categories/lancers/${route.url}`"
            >
              <div class="card h-100">
                <div
                  class="thumbnail"
                  :style="{backgroundImage:'url(' + `${envVarables}/${route.publicId}` + ')'}"
                />
                <div class="card-body">
                  <div class="private-tutor-text">
                    <h3>{{ route.title }}</h3>
                  </div>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
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
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'FreelanceRoutes',
  components: { NewsLetter, Footer },
  data () {
    return {
      routeUrl: this.$route.params.slug,
      envVarables: vars
    }
  },
  computed: {
    ...mapState('freelance', ['freelanceCategories']),
    fliteredFreelancing () {
      const result = this.freelanceCategories.find(category => category.url === this.routeUrl)
      const categories = result.subCategory
      return categories
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
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
</style>
