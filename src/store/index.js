import { createStore } from "vuex"
import counterModule from "./counter/counterModule"

const store = createStore({
    modules: {
        counterMod: counterModule
    }
})

export default store