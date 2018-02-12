<template>
  <div>
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/header/header.vue'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  computed: {
    getOrigin() {
      return this.$route.fullPath
    },
    getQueryParam() {
      return this.$route.query
    }
  },
  created() {
    this.$store.dispatch('tryAutoLogin', {
      origin: this.getOrigin,
      query: this.getQueryParam
    })
  }
}
</script>

<style>

</style>
