<template>
  <v-app>
    <navigationDrawer/>
    <headerSite/>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <footerSite/>
  </v-app>
</template>

<script>
  import headerSite from '~/components/headerSite.vue'
  import footerSite from '~/components/footerSite.vue'
  import navigationDrawer from '~/components/navigationDrawer.vue'

  export default {
    components: {
      headerSite,
      footerSite,
      navigationDrawer
    }
  }
</script>