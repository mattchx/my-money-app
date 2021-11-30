import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAPs757jAbfQ31JmcRa--KeFnsyRdguek4',
  authDomain: 'moneyapp-ae2c0.firebaseapp.com',
  projectId: 'moneyapp-ae2c0',
  storageBucket: 'moneyapp-ae2c0.appspot.com',
  messagingSenderId: '937188562356',
  appId: '1:937188562356:web:ca70e49c195521b8d98ee1',
}

// init firebase
firebase.initializeApp(firebaseConfig)

// init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

export { projectFirestore, projectAuth }
