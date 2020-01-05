import firebase from 'firebase'
// eslint-disable-next-line
import firestore from 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: 'AIzaSyAkjO8rovC7fEmeNMId-JtkPh-c4wacfOY',
    authDomain: 'ninja-chat-5786e.firebaseapp.com',
    databaseURL: 'https://ninja-chat-5786e.firebaseio.com',
    projectId: 'ninja-chat-5786e',
    storageBucket: 'ninja-chat-5786e.appspot.com',
    messagingSenderId: '550002349956',
    appId: '1:550002349956:web:e3e35b320be7b1f9ec2fd1',
}
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
