<template>

<h1>hjkl</h1>
</template>

<script>
  import { mapMutations } from 'vuex'

  export default {
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({ name: 'world' })
        }, 1000)
      })
    },
    computed: {

    },
    methods: {
      ...mapMutations({

      })
    }
  }
</script>
