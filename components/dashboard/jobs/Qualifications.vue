<template>
  <div class="container">
    <form
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col">
          <AppControlInput
            v-model.trim="title"
            type="text"
            required
            @input="checkTitle"
          >
            Title
          </AppControlInput>
          <small
            :class="[title.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ titleInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppTextarea
            v-model.trim="skills"
            type="text"
            placeholder="Add your skills, separate with a comma!!!"
            required
            @input="checkSkills"
          >
            Skills
          </AppTextarea>
          <small
            :class="[skills.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ skillsText }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppTextarea
            v-model.trim="description"
            type="text"
            placeholder="Add description of what you do."
            required
            @input="checkDescription"
          >
            Description
          </AppTextarea>
        </div>
      </div>
      <small
        :class="[!description.length ? 'info-error' : 'info-success']"
      >
        {{ descriptionText }}
      </small>
      <div class="row">
        <div class="mb-3">
          <label for="formFile" class="form-label">Upload Cv*</label>
          <input
            id="formFile"
            class="form-control"
            type="file"
            accept=".pdf,file/pdf"
            required
            @change="selectFile"
          >
        </div>
        <p>File must be PDF</p>
      </div>
      <a
        v-if="applicant.cvUrl.length > 3"
        :href="`${envVarable}/${applicant.cvUrl}`"
      >
        View cv
      </a>
      <AppButton
        type="submit"
        class="tutor-btn mb-3"
      >
        Save
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
const vars = process.env.cloudinary_doc_Url
export default {
  name: 'ApplicantDetails',
  components: { AppTextarea, AppButton, AppControlInput },
  data () {
    return {
      title: '',
      titleInfo: '',
      skills: '',
      skillsText: '',
      description: '',
      descriptionText: '',
      errors: [],
      envVarable: vars,
      cvUrl: ''
    }
  },
  computed: {
    ...mapState('applicant', ['applicant'])
  },
  mounted () {
    this.title = this.applicant.title
    this.skills = this.applicant.skills
    this.description = this.applicant.description
  },
  methods: {
    ...mapActions('applicant', ['updateApplicant']),
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
      this.cvUrl = instance.public_id
    },
    checkTitle () {
      if (this.title.length < 3) {
        this.titleInfo = 'Please add an institute'
        return false
      } else {
        this.titleInfo = ''
        return true
      }
    },
    checkSkills () {
      if (this.skills.length <= 3) {
        this.skillsText = 'Add your skills'
        return false
      } else {
        this.skillsText = ''
        return true
      }
    },
    checkDescription () {
      if (!this.description.length) {
        this.descriptionText = 'Please add your description'
        return false
      } else {
        this.descriptionText = ''
        return true
      }
    },
    onSubmit () {
      if (!this.checkTitle()) {
        this.errors.push('Please add your title')
        this.$toast.error(this.errors[0])
        return
      }
      if (!this.checkDescription()) {
        this.errors.push('Please fill in your description')
        this.$toast.error(this.errors[0])
        return
      }
      if (!this.checkSkills()) {
        this.errors.push('Please fill in skills')
        this.$toast.error(this.errors[0])
        return
      }
      if (!this.errors.length) {
        const payload = {
          title: this.title,
          skills: this.skills,
          description: this.description,
          cvUrl: this.cvUrl
        }
        this.updateApplicant(payload)
      }
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: var(--bg-dark-blue);
  color: #fff;
  width: 155px;
  float: right;
}
</style>
