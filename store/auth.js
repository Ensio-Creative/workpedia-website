export const state = () => ({
  user: {}
})

export const mutations = {
  UPDATE_VERIFY (state) {
    state.user.isVerified = true
  },
  UPDATE_PUBLIC_ID (state, payload) {
    state.user.publicId = payload
  },
  CLEAR_USER (state) {
    state.user = {}
  }
}

export const actions = {
  async login ({ commit, state, dispatch }, payload) {
    try {
      const res = await this.$axios.$post(
        'auth/login',
        payload
      )
      if (res.isAdmin || res.isOperator) {
        commit('UPDATE_USER', res, { root: true })
        const token = state.user.token
        this.$router.push('/admin')
        localStorage.setItem('token', token)
        this.$axios.defaults.headers.common.authorization = token ? `Bearer ${token}` : ''
        dispatch('logOutTimer', 7200 * 1000)
      } else {
        commit('UPDATE_USER', res, { root: true })
        const token = state.user.token
        localStorage.setItem('token', token)
        this.$axios.defaults.headers.common.authorization = token ? `Bearer ${token}` : ''
        dispatch('logOutTimer', 7200 * 1000)
        this.$router.push('/dashboard')
      }
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  logOutTimer ({ commit }, duration) {
    // console.log('Firing')
    setTimeout(() => {
      commit('CLEAR_USER')
      localStorage.removeItem('token')
      this.$router.push('/')
    }, duration)
    // console.log(duration)
  },

  async signUp ({ commit }, payload) {
    try {
      const res = await this.$axios.$put(
        'auth/signup',
        payload
      )
      this.$router.push('/auth/verify')
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async addAdmin ({ commit }, payload) {
    try {
      const res = await this.$axios.$put(
        'admin/registerOperator',
        payload
      )
      this.$toast.success(res.message)
      this.$toast.info('Admin can now log in')
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async updateUser ({ commit, state }, payload) {
    const userId = state.user._id
    const token = state.user.token
    try {
      const res = await this.$axios.$put(
        `user/update/${userId}`,
        payload
      )
      const updatedUser = res.result
      const storedUser = { ...updatedUser, token }
      commit('UPDATE_USER', storedUser, { root: true })
      this.$toast.success(res.message)
      // console.log(res)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async updateUserImg ({ commit, state }, payload) {
    const userId = state.user._id
    try {
      const res = await this.$axios.$put(
        `user/update-img/${userId}`,
        payload
      )
      commit('UPDATE_PUBLIC_ID', res.publicId)
      this.$toast.success(res.message)
      // console.log(res)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async updatePassword ({ commit, state }, payload) {
    const _id = state.user._id
    try {
      const res = await this.$axios.$post(
        `user/${_id}/update-password`,
        payload
      )
      // console.log(res)
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async verify ({ commit, state }, payload) {
    try {
      const res = await this.$axios.$post(
        'auth/verify-user',
        payload
      )
      if (state.user.token) {
        commit('UPDATE_VERIFY')
        this.$router.push('/dashboard')
        this.$toast.success('Verification successful')
        return
      }
      this.$router.push('/auth')
      this.$toast.success(res.message)
    } catch (error) {
      // console.log(error.response.message)
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async forgot ({ commit, state }, payload) {
    try {
      await this.$axios.$post(
        'auth/forgot-password',
        payload
      )
      // console.log(res)
      // commit('UPDATE_RESPONSES', res.message, { root: true })
      // this.$toast.success(res.message)
      this.$router.push('/auth/resetPassword')
    } catch (error) {
      // console.log(error.response.message)
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  async resetPassword ({ commit, state }, payload) {
    try {
      await this.$axios.$post(
        'auth/reset-password',
        payload
      )
      this.$router.push('/auth')
      this.$toast.success('Password reset successful, now login!')
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error(error.response.data.message)
      }
    }
  },

  async resendCode ({ state }) {
    try {
      const userId = state.user._id
      const res = await this.$axios.$post(`user/resend-code/${userId}`)
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  },

  pushToDashboard () {
    window.location.href = process.env.DASHBOARD_URL
  },

  async verifyBvn ({ state }, payload) {
    try {
      const userId = state.user._id
      const res = await this.$axios.$post(`user/verify-bvn/${userId}`, payload)
      this.$toast.success(res.message)
    } catch (error) {
      if (error.response.status === 422) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 404) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 401) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 402) {
        this.$toast.error(error.response.data.message)
      } else if (error.response.status === 400) {
        this.$toast.error(error.response.data.message)
      } else {
        this.$toast.error('Something went wrong')
      }
    }
  }
}

export const getters = {
  isAuthenticated (state) {
    if (state.user.token) {
      return true
    } else {
      return false
    }
  }
}
