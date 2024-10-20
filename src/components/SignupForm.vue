<template>
  <div class="form">
  <h2>Sign Up</h2>
    <input type="text"     placeholder="Username" required v-model="username">
    <input type="email"    placeholder="Email"    required v-model="email">
    <input type="password" placeholder="Password" required v-model="password">
    <button @click="signUp">Sign Up</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase/init.js'

export default {
  data() {
    return {
      username: '',
      email:    '',
      password: ''
    }
  },
  methods: {
    signUp() {
      // register and login user
      createUserWithEmailAndPassword(auth,this.email,this.password)
      .then(() => {
        // update 'displayName'
        /* updateProfile(auth.currentUser, {
          displayName: this.username
        }) */
       const user = auth.currentUser;
       user.sendEmailVerification();
        /* .then(() => {
          // emit event
          this.$router.push('/user')
        }) */

      })
    }
  }
}
</script>