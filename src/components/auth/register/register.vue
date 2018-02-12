<template>
  <b-container class="pt-5">
    <b-row align-content="center" align-h="center" align-v="center">
      <b-col sm="8" md="6" lg="4">
        <b-form @submit.prevent="register">
          <h3 class="text-center pb-3">Register</h3>
          <b-form-group id="nameGroup">

            <b-input-group>

              <b-input-group-prepend is-text>
                <font-awesome-icon icon="user" size="1x"/>
              </b-input-group-prepend>

              <b-form-input id="name"
                            type="text"
                            v-model="user.name"
                            required
                            placeholder="Enter your name">
              </b-form-input>
            </b-input-group>
          </b-form-group>

          <b-form-group id="surnameGroup">

            <b-input-group>

              <b-input-group-prepend is-text>
                <font-awesome-icon icon="tag" size="1x"/>
              </b-input-group-prepend>
              <b-form-input id="surname"
                            type="text"
                            v-model="user.surname"
                            required
                            placeholder="Enter your surname">
              </b-form-input>
            </b-input-group>
          </b-form-group>

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
                              placeholder="Enter password">
                </b-form-input>
              </b-input-group>
          </b-form-group>
          <b-button type="submit" size="lg" variant="warning" block>Register</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
  name: 'Register',
  data() {
    return {
      title: 'Register',
      user: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    register() {
      // TODO
      return true
    }
  },
  components: {
    FontAwesomeIcon
  }
}
</script>

<style>

</style>
