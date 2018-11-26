<template>
    <div class="start-page">
        <div class="start-page__image"></div>
        <div class="start-page__authorization">
            <nuxt/>
        </div>
        <sectionWithErrors/>
    </div>
</template>

<script>
  import sectionWithErrors from '~/components/sectionWithErrors.vue'

  export default {
    components: {
      sectionWithErrors
    }
  }
</script>