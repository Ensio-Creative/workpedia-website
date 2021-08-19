<template>
  <div>
    <section class="freelancing-gigs container">
      <div class="heading">
        <h1> {{ frelanceGigs }} </h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="freelance in splicedFreelancing"
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
                  v-for="skill in freelance.skills.split(',')"
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
