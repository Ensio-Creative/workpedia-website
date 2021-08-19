<template>
  <div>
    <form
      class="mb-5"
      @submit.prevent="onSubmit"
    >
      <div class="row">
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model.trim="firstName"
            type="text"
            required
            placeholder="First name"
            @input="checkFirstName"
          />
          <small
            :class="[firstName.length < 3 ? 'info-error' : 'info-success']"
          >
            {{ firstNameInfo }}
          </small>
        </div>
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model.trim="middleName"
            type="text"
            placeholder="Middle name"
            @input="checkmiddleName"
          />
          <small
            :class="[middleName.length <= 3 ? 'info-error' : 'info-success']"
          >
            {{ middleNameInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model="lastName"
            type="text"
            required
            placeholder="Last name"
            @input="checklastName"
          />
          <small
            :class="[lastName.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ lastNameInfo }}
          </small>
        </div>
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model="phone"
            type="number"
            required
            placeholder="Phone number"
            @input="checkPhone"
          />
          <small
            :class="[phone.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ phoneInfo }}
          </small>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <AppControlInput
            v-model="dob"
            type="date"
            required
          />
        </div>
        <div class="col-12 col-md-6 mt-3">
          <select
            v-model="gendered"
            class="form-select"
            aria-label="Default select example"
            required
          >
            <option
              v-for="gender in genders"
              :key="gender"
              selected
              :value="state"
              required
            >
              {{ gender }}
            </option>
          </select>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <AppControlInput
            v-model="bvn"
            type="number"
            required
            placeholder="BVN number"
            @input="checkbvn"
          />
          <small
            :class="[bvn.length === 11 ? 'info-success' : 'info-error']"
          >
            {{ bvnInfo }}
          </small>
        </div>
      </div>
      <AppButton
        type="submit"
        class="signin-btn mt-3"
      >
        Save update
      </AppButton>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import AppButton from '../auth/UI-Components/AppButton.vue'
import AppControlInput from '../auth/UI-Components/AppControlInput.vue'
export default {
  name: 'UpdateUser',
  components: { AppButton, AppControlInput },
  data () {
    return {
      firstName: '',
      lastName: '',
      middleName: '',
      middleNameInfo: '',
      dob: '',
      phone: '',
      infoTextEmail: '',
      firstNameInfo: '',
      lastNameInfo: '',
      phoneInfo: '',
      genders: [
        'Male',
        'Female'
      ],
      gendered: '',
      bvn: '',
      bvnInfo: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  },
  mounted () {
    this.firstName = this.user.firstName
    this.lastName = this.user.lastName
    this.phone = this.user.phone
  },
  methods: {
    ...mapActions('auth', ['verifyBvn']),
    checkFirstName () {
      if (this.firstName.length < 3) {
        this.firstNameInfo = 'Add your first name'
        return false
      } else {
        this.firstNameInfo = ''
        return true
      }
    },
    checkmiddleName () {
      if (this.middleName.length < 3) {
        this.middleNameInfo = 'Add your middle name'
        return false
      } else {
        this.middleNameInfo = ''
        return true
      }
    },
    checklastName () {
      if (this.lastName.length < 3) {
        this.lastNameInfo = 'Add your last name'
        return false
      } else {
        this.lastNameInfo = ''
        return true
      }
    },
    checkPhone () {
      if (this.phone.length < 11 || this.phone.length > 11) {
        this.phoneInfo = 'Phone should be 11 digits'
        return false
      } else {
        this.phoneInfo = ''
        return true
      }
    },
    checkbvn () {
      if (this.bvn.length < 11 || this.bvn.length > 11) {
        this.bvnInfo = 'BVN should be 11 digits'
        return false
      } else {
        this.bvnInfo = ''
        return true
      }
    },
    onSubmit () {
      if (this.bvn.length === 11 && this.gendered) {
        const result =
        {
          first_name: this.firstName,
          middle_name: this.middleName,
          lastName: this.lastName,
          phone: this.phone,
          dod: this.dob,
          gender: this.gendered,
          id_number: this.bvn,
          id_type: 'BVN'

        }
        this.verifyBvn(result)
        // console.log(result)
        return
      }
      console.log('Wrong pass')
    },
    validEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(email)
    },
    routeToTerms () {
      this.$router.push('/terms')
    }
  }
}
</script>

<style scoped>
.input-error{
  display: block;
  background-color: #E9E9E9;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid red;
  border-radius: 8px;
}

.signin-btn{
  background-color: #251E8C;
}

.sign-privacy{
  padding-top: 10px;
  text-align: center;
}
.sign-options-btn {
  border: 1px solid #BCBCBC;
  background: #FBFBFB;
  border-radius: 5px !important;
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 0px;
  color: #707070;
}
.sign-options-btn img {
  float: left;
  padding: 5px;
  width: 29px;
  height: 29px;
}
.sign-options-btn:nth-child(2){
  background: #FBFBFB;
  border-radius: 5px !important;
  font-family: 'Roboto' !important;
}

.settings-nav{
  margin-top: 20px;
}

a {
  font-size: 18px;
  color: #251E8C;
}
.settings-nav-item:nth-child(1){
  border-right: 1px solid #251E8C;
}
a.nuxt-link-active{
  color: #000;
}

h2 {
  font-weight: bold;
}
</style>
