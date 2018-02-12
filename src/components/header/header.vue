<template>
  <!-- Navbar -->
      <b-navbar type="dark"  toggleable="sm" variant="dark">
        <b-container>
          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-navbar-brand tag="h1" class="mb-0" to="/">BootstrapVue</b-navbar-brand>
          <b-collapse is-nav id="nav_collapse">
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <!-- <b-nav-form> -->
                <b-nav-text>-- {{ isAuthenticated ? 'User': 'Guest' }} Mode --</b-nav-text>

                <b-nav-item to="/auth/login" v-if="!isAuthenticated">Login</b-nav-item>

                <b-button variant="outline-warning" to="/auth/register" v-if="!isAuthenticated">REGISTER</b-button>

                <b-nav-item @click="logout" v-if="isAuthenticated">Logout</b-nav-item>
              <!-- </b-nav-form> -->
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    <!-- End Navbar -->
</template>

<script>
export default {
  name: 'App',
  computed: {
    isAuthenticated() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>

</style>
