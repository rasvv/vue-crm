// import firebase from 'firebase/app'
import { signInWithEmailAndPassword } from "firebase/auth";


export default {
  actions: {
    async login({dispatch, commit}, { email, password }) {
    await signInWithEmailAndPassword(email, password)
        .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });      
      // await firebase.auth().signInWithEmailAndPassword(email, password)
      // try {
      //   await signInWithEmailAndPassword(email, password)
      // } catch (e) {
      //   throw e
      // }
    }
  }
}