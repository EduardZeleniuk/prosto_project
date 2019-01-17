<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4>
      <v-card v-for="post in fetchPosts" :key='post.id'>
        <v-img
          :src="post.url" 
          aspect-ratio="2.75"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{post.title}}</h3>
            <div>{{post.url}}</div>
            <div>{{post.id}}</div>
          </div> 
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Share</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    async fetch ({ store, params }) {
     await store.dispatch('posts/fetchPosts', {url: 'https://jsonplaceholder.typicode.com/photos?_limit=10'})  
    },
    computed: {
      fetchPosts () {
        return this.$store.getters['posts/getPosts']
      }
    },
    methods: {
       infiniteScroll () { 
         let start = 10

        window.onscroll = () => {
          let bottomOfWindow = document.documentElement.scrollTop + window.innerHeight === document.documentElement.offsetHeight;

          if (bottomOfWindow) {
            this.$store.dispatch('posts/fetchPosts', {url: `https://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=5`}) 
            start += 5 
          }
        }
      }
    },
    mounted() {
      this.infiniteScroll()
    }
  }
</script>

<style scoped>

</style>
