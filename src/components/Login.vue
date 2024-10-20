<template>
  <div class="form">
    <h2>Log in</h2>
    <input type="email" placeholder="Email" required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button @click="login">Log in</button>
    <button @click="googleSignIn">Google Sign-in</button>
  </div>

</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/init.js'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
const provider = new GoogleAuthProvider();

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      // login user
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then(() => {
          this.$router.push('/user');
        })
    },
    googleSignIn() {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          const user = result.user;
          console.log('Credential: ', credential);
          console.log('Token: ', token);
          console.log('User: ', user);
          if(user.emailVerified == true){
            this.$router.push('/user');
          }
          
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          const email = error.customData.email;
          const credential = GoogleAuthProvider.credentialFromError(error);
        })

    }
  }
}
</script>