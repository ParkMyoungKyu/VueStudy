<template>
  <div style="padding : 10px; text-align: center">
    <h4>팔로워</h4>
    <input placeholder="🔍" />
    <div style="margin: auto 860px;">
      <div class="post-header" v-for="(follow,i) in follower" :key="i">
        <div class="profile rounded-pill" :style="`background-image:url(${follow.image})`" style="margin-right: 10px;"></div>
        <div class="profile-name">{{ follow.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {onMounted, ref} from "vue";

export default {
  name: "MyPage",
  setup(){ // 컴포넌트를 만들기 전에 실행하는것
    let follower = ref([]);

    onMounted(()=>{
      axios.get('/follower.json')
          .then(data=>{
            follower.value = data.data;
          }).catch(e=>{
        console.log(e);
      })
    })

    return {follower}
  },
  data(){
    return {

    }
  },

}
</script>

<style>
.post-header{
  display: flex;
  margin: 5px 0;
}
.profile{
  width: 30px;
  height: 30px;
  background-size: cover;

}
.profile-name{
  margin: auto 0;
}
</style>