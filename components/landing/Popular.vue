<template>
  <div>
    <section class="popular-jobs container">
      <div class="heading">
        <h1>Featured Jobs</h1>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-for="job in filteredJobs"
          :key="job._id"
          class="col mt-4"
        >
          <client-only>
            <div class="card">
              <div class="card-body">
                <div class="popular-column-heading">
                  <img src="~/static/img/workpedia-jobs-career.svg" alt="">
                  <h3>{{ job.title }}</h3>
                  <p>{{ `${job.city}, ${job.state} ` }}</p>
                </div>
                <div class="popular-durations">
                  <span class="gray-background">
                    <h6>{{ $moment(job.createdAt).format("MMM Do YY") }}</h6>
                  </span>
                  <span class="gray-background">
                    <h6>{{ job.duration }}</h6>
                  </span>
                </div>
                <div class="popular-button text-center">
                  <NuxtLink
                    :to="`/jobs/categories/single-job/${job._id}`"
                  >
                    View Now
                  </NuxtLink>
                </div>
              </div>
            </div>
          </client-only>
        </div>
      </div>
      <div class="view-more">
        <NuxtLink class="view-btn" to="/jobs/categories">
          View All <img src="~/assets/img/arrow.svg">
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Popular',
  computed: {
    ...mapState('jobs', ['jobs']),
    filteredJobs () {
      return this.jobs.slice(0, 12)
    }
  },
  mounted () {
    this.shuffle(this.jobs)
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
.heading {
  color: #251E8C;
}
.popular-text {
  letter-spacing: 0px;
  color: #606060;
  height: 22px;
  overflow: hidden;
}
.popular-column-heading img {
  width: 44px;
  margin-bottom: 10px;
}
</style>
