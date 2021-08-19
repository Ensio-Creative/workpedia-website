<template>
  <div>
    <section class="container private-tutor">
      <div class="heading">
        <h1>Subject Categories</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="tutor in splicedTutors"
          :key="tutor.title"
        >
          <NuxtLink
            :to="`/tutor/categories/${tutor.url}`"
            class="col"
          >
            <div class="card h-80">
              <!-- <img :src="tutor.image" alt="DID not"> -->
              <div
                class="thumbnail"
                :style="{backgroundImage:'url(' + `${envVarables}/${tutor.publicId}` + ')'}"
              />
              <div class="card-body">
                <div class="private-tutor-text">
                  <h3>{{ tutor.title }}</h3>
                </div>
              </div>
              <!-- <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div> -->
            </div>
          </NuxtLink>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/tutor/categories">
          View More <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'Tutors',
  data () {
    return {
      envVarables: vars
    }
  },
  computed: {
    ...mapState('tutors', ['tutorRoutes']),
    splicedTutors () {
      const listedCourse = this.tutorRoutes.slice(0, 12)
      return listedCourse
    }
  }
}
</script>

<style scoped>
.private-tutor{
  margin-top: 80px;
  margin-bottom: 80px;
}
.thumbnail{
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px;
}
.heading {
  padding-top: 0px;
  padding-bottom: 7px;
  color: #251E8C;
}
@media screen and (max-width: 780px) {
  .private-tutor{
    margin-top: 50px;
    margin-bottom: 80px;
  }
  .heading {
    padding: 20px;
    color: #251E8C;
  }
}
</style>
