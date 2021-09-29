<template>
  <div>
    <!-- Different categories -->
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="route in freelanceCategoriesSearch"
            :key="route.url"
            class="col mt-4"
          >
            <NuxtLink
              :to="`/freelancing/categories/${route.url}`"
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
  name: 'FreelanceCategory',
  components: { NewsLetter, Footer },
  data () {
    return {
      routes: [],
      envVarables: vars
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing', 'freelanceCategoriesSearch'])
  }
  // mounted () {
  //   this.routes = this.freelanceCategory
  // }
}
</script>

<style scoped>
.categorie {
  margin-bottom: 8rem;
}
.categories-nav{
  background-color: #fff;
}
.categories-nav .active{
  color: #2B7DC4;
}
.categories-nav a{
  color: rgba(0, 0, 0, 0.5);
}
.nav-link a:hover
.nav-link a:focus{
  color: #fff;
}
.popular-column {
  margin-right: 26px !important;
  margin-top: 10px;
}
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
</style>
