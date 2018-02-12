<template>
<b-container class="pt-5">
    <b-row align-content="center" align-h="center" align-v="center">
      <b-col sm="10" md="8" lg="6" class="text-center">
        <h3>{{firstMsg}}</h3>
        <h2>{{secondMsg}}</h2>
        <h1>{{thirdMsg}}</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      firstMsg: 'Welcome to Your Vue.js App',
      secondMsg: 'Now you can create anything',
      thirdMsg: 'Lets do it!!!'
    }
  }
}
</script>

<style>

</style>
