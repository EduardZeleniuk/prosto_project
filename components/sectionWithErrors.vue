<template>
    <div class="section-with-errors" :class="{'active': error }">
        <div class="section-with-errors-container">
            {{error}}
        </div>
        <div class="section-with-errors__close fa fa-close" @click="closeError"></div>
    </div>
</template>

<script>
  export default {
    computed: {
      error () {
        return this.$store.getters.error
      }
    },
    methods: {
      closeError () {
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
