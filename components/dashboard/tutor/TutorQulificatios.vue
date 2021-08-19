<template>
  <div class="container">
    <form @submit.prevent="onSubmit">
      <div class="row">
        <div class="mb-3">
          <label for="formFile" class="form-label">Upload Cv*</label>
          <input
            id="formFile"
            class="form-control"
            type="file"
            accept=".pdf,file/pdf"
            @change="selectFile"
          >
        </div>
        <p>File must be PDF</p>
      </div>
    </form>
    <a
      v-if="tutor.cvUrl.length > 3"
      :href="`${envVarable}/${tutor.cvUrl}`"
    >
      View cv
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
const vars = process.env.cloudinary_doc_Url
export default {
  name: 'TutorQulifications',
  data () {
    return {
      envVarable: vars
    }
  },
  computed: {
    ...mapState('tutors', ['tutor'])
  },
  methods: {
    ...mapActions('tutors', ['updateCv']),
    async selectFile (e) {
      const file = e.target.files[0]

      /* Make sure file exists */
      if (!file) {
        return
      }

      /* create a reader */
      const readData = f => new Promise((resolve) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.readAsDataURL(f)
      })

      /* Read data */
      const data = await readData(file)
      /* upload the converted data */
      const instance = await this.$cloudinary.upload(data, {
        uploadPreset: 'workpedia-cv'
      })
      const payload = {
        cvUrl: instance.public_id
      }
      this.updateCv(payload)
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: #251E8C;
  color: #fff;
  width: 155px;
  margin-top: 20px;
}
a {
  color: var(--bg-dark-blue)
}
a:hover {
  color: var(--bg-dark-blue);
}
</style>
