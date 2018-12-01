<template>
  <div>
    <ul v-for="post in fetchPosts" :key='post.id'>
      <li>
        {{post.title}}
      </li>
      <li>
        {{post.description}}
      </li>
    </ul>

    <button @click="creatPosts" > create posts </button>
  </div>
</template>

<script>
  export default {
    fetch ({ store, params }) {
     store.dispatch('posts/fetchPosts')  
    },
    computed: {
      fetchPosts () {
        return this.$store.getters['posts/getPosts']
      }
    },
    methods: {
      creatPosts () {
      }
    }
  }
</script>

<style scoped>

</style>
