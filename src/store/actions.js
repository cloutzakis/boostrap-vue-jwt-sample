import axios from '@/axios/axios'
import router from '@/router/router'
import ls from 'store'

export default {
  login: ({ commit }, payload) => {
    return axios
      .post('authenticate', payload.user)
      .then(res => {
        const idToken = res.data.id_token

        ls.set('id_token', idToken)
        axios.defaults.headers.common.Authorization = 'Bearer ' + idToken
        commit('loginUser', { token: idToken })

        router.replace(payload.origin ? payload.origin : '/home')
      })
      .catch(err => console.log(err))
  },

  tryAutoLogin: ({ commit }, payload) => {
    const idToken = ls.get('id_token')

    if (!idToken) {
      return false
    }

    commit('loginUser', { token: idToken })

    if (payload.origin.includes('/auth/login')) {
      if (payload.query && payload.query.redirect) {
        router.replace(payload.query.redirect)
      } else {
        router.replace('/home')
      }
    } else {
      router.replace(payload.origin)
    }
  },

  logout: ({ commit }) => {
    ls.remove('id_token')
    delete axios.defaults.headers.common.Authorization
    commit('logoutUser')

    router.replace('/')
  }
}
