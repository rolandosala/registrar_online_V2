<template>
    <p>Child Component</p>
</template>
<script>
export default {
    beforeCreate() {console.log('Child beforeCreate()')},
    created() {console.log('Child created()')},
    beforeMount() {console.log('Child beforeMount()')},
    mounted() {console.log('Child mounted()')},
    beforeUnmount() {console.log('Child beforeUnmount()')},
    unmounted() {console.log('Child unmounted()')}
}
</script>