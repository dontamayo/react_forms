// * means bringing all inside the firebase

import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBfxZJDgZfQOuZE1fgdOqCAXt1wXuwyE9g",
    authDomain: "form-test-9aea9.firebaseapp.com",
    databaseURL: "https://form-test-9aea9.firebaseio.com",
    projectId: "form-test-9aea9",
    storageBucket: "form-test-9aea9.appspot.com",
    messagingSenderId: "426896864636"
  };

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export{
  firebase,
  firebaseDB,
  googleAuth
}

// firebaseDB.ref('users').orderByChild('lastname').equalTo('Curry').once('value')
// .then((snapshot)=>{
//   console.log(snapshot.val());
// })
