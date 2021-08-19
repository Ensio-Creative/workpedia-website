<template>
  <div>
    <section class="categorie mt-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div
            v-for="tutor in fliteredTutors"
            :key="tutor.title"
          >
            <NuxtLink
              :to="`/tutor/${tutor.title}/get-tutor`"
              class="col"
            >
              <div class="card h-100">
                <!-- <img :src="tutor.image" alt="DID not"> -->
                <div
                  class="thumbnail"
                  :style="{backgroundImage:'url(' + `${envVarables}/${tutor.publicId}` + ')'}"
                />
                <div class="card-body">
                  <div class="private-tutor-text">
                    <h3>{{ tutor.title }}</h3>
                  </div>
                  <div class="private-tutor-info">
                    <p>{{ tutor.message }}</p>
                  </div>
                </div>
                <!-- <div class="card-footer">
                  <small class="text-muted">Last updated 3 mins ago</small>
                </div> -->
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- <Testimony /> -->
    <!-- News Letter -->
    <NewsLetter
      class="mt-5"
    />
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
  name: 'SingleTutor',
  components: { NewsLetter, Footer },
  data () {
    return {
      routeUrl: this.$route.params.slug,
      envVarables: vars
    }
  },
  computed: {
    ...mapState('tutors', ['tutorRoutes']),
    fliteredTutors () {
      const result = this.tutorRoutes.find(category => category.url === this.routeUrl)
      const categorie = result.subCategory
      return categorie
    }
  }
}
</script>

<style scoped>
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.categorie {
  margin-bottom: 8rem;
}
</style>
