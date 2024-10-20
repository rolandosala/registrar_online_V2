<template>
    <button @click="increment(10)">Increment</button>
</template>
<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions('counterMod',['increment'])
    },
    
}
</script>