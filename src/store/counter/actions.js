const counterActions = {
    increment(context, payload) {
        setTimeout(() => {
            context.commit('increment', payload)
        }, 100)

    }
}
export default counterActions