import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            VuexData : "Vuex 데이터"
        }
    }
})

export default store;