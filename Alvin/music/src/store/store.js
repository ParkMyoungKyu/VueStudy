import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            VuexData : "Vuex 데이터",
            MyVersion : 1.0,
            like : ['51','23','25','14','330','510','400','234','246','142']
        }
    },
    // 데이터 변경하는곳
    mutations:{
        updateData(state){
            if(state.VuexData == "Vuex 수정") state.VuexData = "Vuex 데이터"
            else state.VuexData = "Vuex 수정"

        },
        versionUpgrade(state){
            state.MyVersion += 1;
        },
        likeCheck(state,data){
            if(data.likeText == "좋아요") state.like[data.index] = Number(state.like[data.index]) + 1;
            else state.like[data.index] = Number(state.like[data.index]) - 1;
        }
    }
})

export default store;