import axios from 'axios'

class Post {
  constructor (title, description, ownerId, id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.id = id
  }
}

export const state = () => ({
  posts: []
}) 

export const getters = {
  getPosts (state) {
    return state.posts
  }
}

export const mutations = {
  setPosts(state, payload) {
    state.posts = payload
  }
}


export const actions = {
  async fetchPosts ({commit}) {
    commit('clearError',null, { root: true })
    commit('setLoading', true, { root: true })

    const resultPosts = []

    try {
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts`) 

      Object.keys(data).forEach(key => {
        const post = data[key]
        resultPosts.push(
          new Post(post.title, post.body, post.userId, post.id)
          )
      }) 

      commit('setPosts', resultPosts) 
      commit('setLoading', false, { root: true })
    } catch (error) {
      commit('setLoading', false, { root: true })
      commit('setError', error.message, { root: true })
      throw error
    }
  }
}



