export default function ({ $axios }, inject) {
  // const token = store

  // $axios.onError((error) => {
  //   console.log(error, token)
  // })

  // $axios.onResponse((res) => {
  //   // $toast.success(res)
  //   // console.log(res.data.message)
  // })
  const token = localStorage.getItem('token')
  $axios.defaults.headers.common.authorization = token ? `Bearer ${token}` : ''

  $axios.setBaseURL(`${process.env.BASE_URL}/api/`)
  // $axios.setToken(token, 'Bearer')
}
