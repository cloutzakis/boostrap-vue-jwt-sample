export default {
  setGuestToken: (state, payload) => {
    state.guestToken = payload.id_token
  },

  loginUser: (state, payload) => {
    state.user.token = payload.token
  },

  logoutUser: state => {
    state.user.token = null
  }
}
