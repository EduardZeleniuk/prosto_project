import axios from 'axios'

class Post {
  constructor (albumId, title, url, thumbnailUrl, id = null) {
    this.albumId = albumId
    this.title = title
    this.url = url
    this.thumbnailUrl = thumbnailUrl
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
  setPosts (state, payload) {
    state.posts = [...state.posts, ...payload]
  }
}

export const actions = {
  async fetchPosts ({ commit }, payload) {
    commit('clearError', null, { root: true })
    commit('setLoading', true, { root: true })

    const resultPosts = []

    try {
      const { data } = await axios.get(payload.url)

      Object.keys(data).forEach(key => {
        const post = data[key]
        resultPosts.push(
          new Post(post.albumId, post.title, post.url, post.thumbnailUrl, post.id)
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
