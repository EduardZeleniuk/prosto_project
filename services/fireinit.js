import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'

var config = {
  apiKey: "AIzaSyDBtf_oNV67H64-2oKogYbJdDqWpozrR1Q",
  authDomain: "to-do-c034a.firebaseapp.com",
  databaseURL: "https://to-do-c034a.firebaseio.com",
  projectId: "to-do-c034a",
  storageBucket: "to-do-c034a.appspot.com",
  messagingSenderId: "347181284184"
}

!firebase.apps.length ? firebase.initializeApp(config) : ''
export const auth = firebase.auth()
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const DB = firebase.database()
export const StoreDB = firebase.firestore()
export default firebase