<template>
    <v-toolbar fixed app>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat to="/lenta">Lenta</v-btn>
            <v-btn flat to="/">home</v-btn>
            <v-btn flat @click="onLogout">Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>

  export default {
    methods: {
      onLogout () {
        this.$store.dispatch('user/logoutUser')
        // this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>
