<template>
  <div>
    <div
      class="user-not-logged-in"
    >
      <button
        class="btn landing-outline ml-3"
        @click="goToDashboard(true)"
      >
        Login
      </button>
      <button
        class="btn landing-outline ml-1"
        @click="goToDashboard(false)"
      >
        Create account
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
const vars = process.env.cloudinary_Img_Url
export default {
  name: 'UserRegister',
  data () {
    return {
      showUserDroped: false,
      userOnDashboard: false,
      authenticated: false,
      envVarable: vars
    }
  },
  computed: {
    ...mapState('auth', ['user']),
    showBar () {
      const result = !this.$store.state.mobileDash
      return result
    }
  },
  methods: {
    // fetchImage()
    ...mapActions('auth', ['pushToDashboard']),
    goToDashboard (value) {
      this.pushToDashboard()
    },
    showUserDrop () {
      if (this.showUserDroped === true) {
        this.showUserDroped = false
        // console.log('Work na!!!!!')
      } else {
        this.showUserDroped = true
        // console.log('Work no!!!!!')
      }
    },
    logOut () {
      this.$router.push('/')
      this.$store.commit('CLEAR_USER')
    }
  }
}
</script>

<style scoped>
.userSign-img {
  margin-top: 0px;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  width: 30px;
  border-radius: 20px;
}
.list-of-users-action {
  display: inline;
  padding: 10px;
  font-size: 25px;
}
.list-of-users-action img {
  width: 33px;
}

.list-of-users-action a {
  color: var(--bg-dark-blue);
  text-decoration: none;
}
.postions{
  width: 107px;
  position: fixed;
  /* display: none; */
  z-index: 1000;
  right: 116px;
  top: 49px;
}
.postions a {
  color: #000;
}
.postions-items{
  padding: 10px;
  font-size: 18px;
}
.postions-items:nth-child(3){
  cursor: pointer;
}
.landing-outline {
  color: var(--bg-dark-blue);
}
.landing-outline:nth-child(2) {
  border: 2px solid var(--bg-dark-blue);
  border-radius: 20px;
  color: var(--bg-dark-blue);
}

.show-bar{
  display: none;
}
.show-bar i{
  color: var(--bg-dark-blue);
}
.dropbtn {
  display: flex;
  /* width: 60px; */
  justify-content: space-evenly;
  color: white;
  padding: 0px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: block;
  width: 105px;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #fff;
  min-width: 161px;
  box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.2);
  z-index: 1;
  right: -26px;
  border-radius: 5px;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: var(--bg-dark-blue);
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
i {
  color: #000;
  align-self: center;
}
/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}
@media screen and (max-width: 780px) {
  .show-bar {
    display: block;
    float: right;
  }
  .dropdown {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .dropdown .fa-chevron-down{
    display: none;
  }
  .dropdown:hover .dropdown-content {display: none;}
  .dropdown-content {
    display: none;
  }
  .userSign-img {
    margin-top: 6px;
    padding: 0px;
    background-repeat: no-repeat;
    background-position: 100%;
    background-size: contain;
    width: 42px;
    border-radius: 99px;
    height: 42px;
  }
}
</style>
