const counterGetters = {
    getCounter(state) {
        return state.counter
    },
    getNormalizedCounter(state, getter) {
        if (getter.getCounter >= 50) {
            return 50
        }
        return getter.getCounter
    }

}

export default counterGetters