import counterGetters from "./getters"
import counterActions from "./actions"
import counterMutations from "./mutations"
const counterModule = {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    //Use Mutations
    getters: counterGetters,
    actions: counterActions,
    mutations: counterMutations
    
}

export default counterModule