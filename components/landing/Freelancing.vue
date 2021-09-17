<template>
  <div>
    <section class="freelancing-gigs container">
      <div class="heading">
        <h1> {{ frelanceGigs }} </h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="freelance in splicedFreelancing.slice(0, 12)"
          :key="freelance._id"
          class="col mt-4"
        >
          <div class="card p-4">
            <div
              class="user-image"
              :style="{backgroundImage: 'url('+ `${envVarables}/${freelance.userId.publicId}` +')'}"
            />
            <div class="card-body text-center">
              <div class="freelance-text mt-2">
                <h3>{{ freelance.title }}</h3>
              </div>
              <div class="freelance-amount">
                <span
                  v-for="skill in freelance.skills.split(',').slice(0, 7)"
                  :key="skill"
                  class="skills mt-2"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/freelancing/categories">
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
  name: 'Freelancing',
  props: {
    frelanceGigs: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      envVarables: vars
    }
  },
  computed: {
    ...mapState('freelance', ['freelancing']),
    splicedFreelancing () {
      const listed = this.freelancing
      return listed
    }
  },
  mounted () {
    this.shuffle(this.freelancing)
  },
  methods: {
    shuffle (array) {
      let currentIndex = array.length
      let randomIndex

      // While there remain elements to shuffle...
      while (currentIndex !== 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex], array[currentIndex]]
      }

      return array
    }
  }
}
</script>

<style scoped>
@media screen and (max-width: 780px){
  .freelancing-gigs {
    padding-top: 58px;
  }
}
.skills {
  padding: 8px;
  margin: 4px 1px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: bold;
}
</style>
