<template>
    <div>
        <!-- login -->
        <template v-if="showLogin">
            <!-- listen for event -->
            <login-form/>
            <p>No account yet? <span @click="showLogin = false">Sign up</span> instead.</p>
        </template>
        <!-- or register -->
        <template v-else>
            <!-- listen for event -->
            <signup-form />
            <p>Already registered? <span @click="showLogin = true">Login</span> instead.</p>
        </template>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue'
import LoginForm from '@/components/Login.vue'

export default {
    components: { SignupForm, LoginForm },
    data() {
        return {
            showLogin: true,
        }
    },
}
</script>

<style>
p,
h2 {
    text-align: center
}

span {
    text-decoration: underline;
    cursor: pointer;
    color: blue
}

.form {
    display: flex;
    flex-direction: column;
    row-gap: 16px;
    max-width: 260px;
    margin: 30px auto
}

input,
button {
    height: 28px
}

input {
    padding-left: 10px
}

button {
    width: fit-content;
    margin: auto
}
</style>