<template>
    <h1>Home Page</h1>
    <p>Counter: {{ getCounter }}</p>
    <p>Normalized: {{ getNormalizedCounter }}</p>
    <increment-counter />
    <div v-for="post in posts" :key="post.id">
        <p>{{ post.id }} {{ post.title }}</p>
    </div>
    
</template>
<script>
import IncrementCounter from '@/components/IncrementCounter.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    data() {
        return {
            posts: []
        }
    },
    components: { IncrementCounter },
    computed: {
        ...mapGetters('counterMod', ['getCounter']),
        ...mapGetters('counterMod', ['getNormalizedCounter'])
    },
    mounted() {
        axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then((response) => {
                this.posts = response.data
            })
    }
}
</script>