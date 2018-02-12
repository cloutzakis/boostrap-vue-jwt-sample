<template>
  <b-container class="pt-5">
    <b-row align-content="center" align-h="center" align-v="center">
      <b-col sm="8" md="6" lg="4">
        <b-form @submit.prevent="login">
          <h3 class="text-center pb-3">Login</h3>
          <b-form-group id="emailGroup">

            <b-input-group>

              <b-input-group-prepend is-text>
                <font-awesome-icon icon="envelope" size="1x"/>
              </b-input-group-prepend>

              <b-form-input id="email"
                            type="email"
                            v-model="user.username"
                            required
                            placeholder="Enter email">
              </b-form-input>
            </b-input-group>
          </b-form-group>
          <b-form-group id="passwordGroup">

            <b-input-group>

              <b-input-group-prepend is-text>
                <font-awesome-icon icon="key" size="1x"/>
              </b-input-group-prepend>

              <b-form-input id="password"
                            type="password"
                            v-model="user.password"
                            required
                            placeholder="Enter name">
              </b-form-input>
            </b-input-group>
          </b-form-group>
          <b-button type="submit" size="lg" variant="warning" block>Login</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Login',
  data() {
    return {
      title: 'Login',
      user: {
        username: 'user@user.com',
        password: 'user'
      }
    }
  },
  computed: {
    getOrigin() {
      return this.$route.query ? this.$route.query.redirect : null
    }
  },
  methods: {
    login() {
      this.$store.dispatch('login', {
        user: this.user,
        origin: this.getOrigin
      })
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>

</style>
