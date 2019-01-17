import { auth } from '@/services/fireinit.js'

class User {
  constructor (id) {
    this.id = id
  }
}

export const state = () => ({
  user: null
})

export const getters = {
  getUser (state) {
    return state.user
  },

  isUserLoggedIn (state) {
    return state.user !== null
  }
}

export const mutations = {
  setUser (state, payload) {
    state.user = payload
  }
}

export const actions = {

  async registerUser ({ commit }, { email, password }) {
    commit('clearError', null, { root: true })
    commit('setLoading', true, { root: true })
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      commit('setUser', new User(user.uid))
      commit('setLoading', false, { root: true })
    } catch (error) {
      commit('setLoading', false, { root: true })
      commit('setError', error.message, { root: true })
      throw error
    }
  },

  async loginUser ({ commit }, { email, password }) {
    commit('clearError', null, { root: true })
    commit('setLoading', true, { root: true })
    try {
      const user = await auth.signInWithEmailAndPassword(email, password)
      commit('setUser', new User(user.uid))
      commit('setLoading', false, { root: true })
    } catch (error) {
      commit('setLoading', false, { root: true })
      commit('setError', error.message, { root: true })
      throw error
    }
  },

  autoLoginUser ({ commit }, payload) {
    commit('setUser', new User(payload.uid))
  },

  logoutUser ({ commit }) {
    auth.signOut()
    commit('setUser', null)
  }
}
