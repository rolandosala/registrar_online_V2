<template>
    <greetings-message ref="componentRef" />
</template>
<script>
import GreetingsMessage from './GreetingsMessage.vue'
export default {
    components: {GreetingsMessage},
    mounted() {
        console.log(this.$refs.componentRef.msg)
    }
}
</script>
