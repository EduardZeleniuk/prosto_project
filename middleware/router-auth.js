import { auth } from '@/services/fireinit.js'

export default function({ store, redirect, route }) {
  auth.onAuthStateChanged(user => {
    if (user) {
      store.dispatch('user/autoLoginUser', user)
    }

    const routeName = route.name == 'login' ? true : false
    store.state.user.user != null && (routeName || route.name == 'registration') ? redirect('/') : ''
    if (route.name != 'registration') {
      store.state.user.user == null && (!routeName) ? redirect('/login') : ''
    }
  })
}

// function isAdminRoute(route) {
//   if (route.matched.some(record => record.path == '/admin')) {
//     return true
//   }
// }

