<template>
  <div>
    <section class="walk-you-through">
      <div class="container">
        <div class="heading">
          <h2 class="text-center">
            Getting Started
          </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 g-4 text-center">
          <div
            class="col mt-4"
          >
            <div class="card h-80">
              <div class="card-body">
                <div class="text-white text-left">
                  <h3>Vetted and experienced tutors for you or your kids.</h3>
                </div>
                <img src="@/static/img/workpedia-vetted-tutors.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="col mt-4"
          >
            <div class="card h-80 card-column2">
              <div class="card-body">
                <div class="text-white text-left">
                  <h3>Find amazing jobs to take your career to the next step.</h3>
                </div>
                <img src="@/static/img/workpedia-jobs-career.svg" alt="">
              </div>
            </div>
          </div>
          <div
            class="col mt-4"
          >
            <div class="card h-80 card-column3">
              <div class="card-body">
                <div class="text-white text-left">
                  <h3>Talent marketplace to hire freelancers and handymen.</h3>
                </div>
                <img src="@/static/img/workpedia-freelance-marketplace.svg" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Walk'
}
</script>

<style scoped>
.img-head i {
  font-size: 40px;
}
h2 {
  color: var(--bg-dark-blue);
  font-weight: bold;
}
.card {
  height: 427px;
  background-color: var(--bg-dark-blue);
  border: 0px solid rgba(0,0,0,.125);
}
.card img{
  width: 127px;
  margin-top: 44px;
}
.card-body {
    margin-top: 37px;
  }
.card-column2 {
  background-color: var(--bg-yellow);
  border: 0px solid rgba(0,0,0,.125);
}

.card-column2 img {
  width: 127px;
  margin-top: 44px;
}

.card-column3 {
  background-color: var(--bg-light-blue);
  border: 0px solid rgba(0,0,0,.125);
}
.card-column3 img {
  width: 127px;
  margin-top: 44px;
}
</style>
