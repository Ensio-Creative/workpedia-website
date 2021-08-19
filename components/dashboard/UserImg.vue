<template>
  <div>
    <div
      class="user-img"
      :style="{backgroundImage: 'url('+ `${envVarable}/${user.publicId}` +')'}"
    />
    <label
      class="text-primary font-weight-bold font-size-sm"
      for="single-uploader-component"
    >Avatar upload</label>
    <SingleUpload id="single-uploader-component" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SingleUpload from '@/components/auth/UI-Components/SingleUpload.vue'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'ImageUpload',
  components: { SingleUpload },
  data () {
    return {
      envVarable: vars
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    onChange (image) {
      console.log(image)
    }
  }
}
</script>

<style scoped>

</style>
