<template>
    <div class="start-page">
        <div class="start-page__image"></div>
        <div class="start-page__authorization">
            <nuxt/>
        </div>
    </div>
</template>

<script>
  import headerSite from '~/components/sectionWithErrors.vue'

  export default {
    components: {
      sectionWithErrors
    }
  }
</script>