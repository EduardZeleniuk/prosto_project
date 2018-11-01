<template>
    <v-toolbar fixed app>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-list-tile @click="onLogout">
                <v-list-tile-action>
                    <v-icon>exit_to_app</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                    <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
                </v-list-tile-content>
            </v-list-tile>
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