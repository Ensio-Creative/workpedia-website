<template>
  <div>
    <!-- <nav>
      <ul>
        <li
          v-for="link of texts.toc"
          :key="link.id"
        >
          <NuxtLink
            :to="`#${link.id}`"
            :class="{ 'py-2': link.depth === 2, 'ml-2 pb-2': link.depth === 3 }"
          >
            {{ link.text }}
          </NuxtLink>
        </li>
      </ul>
    </nav> -->
    <div class="bg-hero container">
      <div class="row justify-content-around text-center">
        <div class="col-12 col-md-12 col-lg-12 bg-texts">
          <h1>
            {{ texts.title }}
          </h1>
        </div>
      </div>
    </div>
    <article class="container content-container">
      <!-- <h1>{{ texts.title }}</h1>
      <p>{{ texts.description }}</p>
      <img :src="texts.img" :alt="texts.alt"> -->
      <!-- <p>Article last updated: {{ formatDate(article.updatedAt) }}</p> -->

      <nuxt-content :document="texts" />
    </article>
    <NewsLetter />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/common/Footer.vue'
import NewsLetter from '~/components/common/NewsLetter.vue'
export default {
  name: 'TryContent',
  components: { Footer, NewsLetter },
  data () {
    return {
      texts: ''
    }
  },
  mounted () {
    this.getText()
  },
  methods: {
    async getText () {
      this.texts = await this.$content('sitetexts', this.$route.params.tryContent).fetch()
    }
  }
}
</script>

<style scoped>
.bg-hero{
  background-color: #fff;
  height: 41vh;
}
.bg-hero h1 {
  padding: 0px;
  margin-top: 182px;
}
.bg-hero img{
  width: 623px;
  margin-bottom: 20px;
}
.about-background{
  background-color: #251E8C;
  padding: 102px;
  margin-top: 21px;
}
.about-background h1 {
  font-weight: bold;
}
 .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  h3 {
    color: var(--bg-dark-blue);
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .content-container {
    margin-top: 85px;
    margin-bottom: 85px;
  }
@media screen and (max-width: 780px){
  .bg-texts {
    margin-top: 30px;
    text-align: center;
  }
  .bg-hero h1 {
    margin-top: 50px;
  }
  .bg-hero {
    background-color: #fff;
    height: 25vh;
  }

}
</style>
