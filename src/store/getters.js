export default {
  isAuthenticated: state => {
    return state.user.token !== null
  }
}
