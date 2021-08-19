<template>
  <div class="container">
    <form @submit.prevent="onSave">
      <div class="row">
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model="subject"
            type="text"
            required
            placeholder="Subjects(s)"
          >
            Subject(s)
          </AppControlInput>
          <small>
            Separate subjects with a comma,
          </small>
        </div>
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model.trim="classes"
            type="text"
            required
            placeholder="Class you can teach"
          >
            Class
          </AppControlInput>
          <small>
            Separate classes with a comma,
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppTextarea
            v-model="whatYouWouldCover"
            type="text"
            class="mb-3"
            placeholder="Be specific on the areas you would tutor on"
            required
          >
            What you would cover?
          </AppTextarea>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <AppTextarea
            v-model="description"
            type="text"
            class="mb-3"
            placeholder="Describe"
            required
          >
            Description
          </AppTextarea>
        </div>
      </div>
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
import { mapActions, mapState } from 'vuex'
import AppButton from '~/components/auth/UI-Components/AppButton.vue'
import AppControlInput from '~/components/auth/UI-Components/AppControlInput.vue'
import AppTextarea from '~/components/auth/UI-Components/AppTextarea.vue'
import subjects from '~/static/tutor/subjects.js'
export default {
  name: 'TutorDetails',
  components: { AppButton, AppControlInput, AppTextarea },
  emits: ['changeComponent'],
  data () {
    return {
      subject: '',
      classes: '',
      whatYouWouldCover: '',
      description: '',
      subjects
    }
  },
  computed: {
    ...mapState('tutors', ['tutor'])
  },
  mounted () {
    this.subject = this.tutor.tutorSubject
    this.classes = this.tutor.classes
    this.whatYouWouldCover = this.tutor.courseCategory
    this.description = this.tutor.description
  },
  methods: {
    ...mapActions('tutors', ['updateTutor']),
    onSave () {
      const payload = {
        tutorSubject: this.subject,
        tutoredClass: this.classes,
        courseCategory: this.whatYouWouldCover,
        description: this.description
      }
      // console.log(payload)
      this.updateTutor(payload)
      this.$emit('changeComponent')
    }
  }
}
</script>

<style scoped>
.tutor-btn{
  background-color: #251E8C;
  color: #fff;
    width: 155px;
    float: right;
}
</style>
