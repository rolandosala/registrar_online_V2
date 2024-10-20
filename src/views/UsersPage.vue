<template>
    <h1>Welcome to Users Page {{ user }}</h1>

    <RouterLink to="dashboard">Dashboard</RouterLink>
    <button @click="logOut">Logout</button>

    <div class="form">
        <input type="text" placeholder="Firstname" required v-model="firstname">
        <input type="text" placeholder="Lastname" required v-model="lastname">
        <button @click="createUser">Create User</button>
    </div>
    <div>
        <ul v-for="u in users" :key="u.firstname">
            <li>{{ u.firstname }} {{ u.lastname }}</li>
        </ul>
    </div>
    <!-- <p>Counter: {{ getCounter }}</p>
    <increment-counter /> -->
</template>
<script>
import { RouterLink } from 'vue-router';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebase/init';
import { db } from '@/firebase/init';
import { addDoc, collection, query, getDocs, onSnapshot, doc } from 'firebase/firestore';
/* import IncrementCounter from '@/components/IncrementCounter.vue';
import { mapGetters } from 'vuex';
export default {
    components: {IncrementCounter},
    computed: {
        ...mapGetters('counterMod', ['getCounter'])
    }
} */
export default {
    data() {
        return {
            firstname: '',
            lastname: '',
            user: auth.currentUser.displayName,
            users: []
        }
    },
    created() {
        this.getUsers();
    },
    methods: {
        logOut() {
            signOut(auth)
                .then(() => {
                    this.$router.push('/');
                })
        },
        async createUser() {
            const colRef = collection(db, 'users');
            const objData = {
                firstname: this.firstname,
                lastname: this.lastname
            }

            const docRef = await addDoc(colRef, objData);

            console.log('Document id', docRef.id);
        },
        async getUsers() {
            const querySnap = await getDocs(query(collection(db, 'users')));
            querySnap.forEach((doc) => {
                this.users.push(doc.data());
            })
          /* onSnapshot(query(collection(db,'users'))),
           (snap) => {
            snap.forEach((doc) => {
                this.users.push(doc.data())
            })
           } */
          /* onSnapshot(doc(db, 'users'), (snap) => {
            snap.forEach((d) => {
                this.users.push(d.data())
            })
          }) */
        }
    }
}
</script>