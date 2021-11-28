import { createStore } from "vuex";
import axios from "axios";

const store = createStore({
    state(){
        return{
            VuexData : "Vuex 데이터",
            MyVersion : 1.0,
            like : ['51','23','25','14','330','510','400','234','246','142'],
            dataMore : {},
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
        },
        setData(state, data){
            state.dataMore = data
        }
    },
    // 서버에 데이터를 요청하고자 할때 사용 (ajax)
    actions:{
        getData(context){
            axios.get('https://www.music-flo.com/api/meta/v1/album/ALL/new?timestamp=1636793296472')
              .then((data)=>{
                console.log(data.data.data.list);
                context.commit('setData',data.data.data.list);
            }).catch((e)=>{
                console.log(e);
            })
        }
    },
    getters:{
        updateData2(state){
            if(state.VuexData == "Vuex 수정") state.VuexData = "Vuex 데이터"
            else state.VuexData = "Vuex 수정"

        },
    }
})

export default store;