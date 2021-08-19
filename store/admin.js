
export const actions = {
  async postJob ({ commit, rootState }, payload) {
    const userId = rootState.auth.user._id
    payload = { ...payload, userId }
    try {
      const postedJob = await this.$axios.$put(
        'admin/post-job',
        payload
      )
      this.$toast.success(postedJob.message)
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
