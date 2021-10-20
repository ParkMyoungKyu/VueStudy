<template>

  <div class="black-bg" v-if="modalchang == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용</p>
      <button v-on:click="modalchang = false">닫기</button>
    </div>
  </div>

  <div class="menu">
    <a v-for="menulist in menus" :key="menulist">{{ menulist }}</a><br>
  </div>

  <!-- <div>
    <img :src="oneroominfo[0].image" class="room-img">
    <h4>{{ oneroominfo[0].title }}</h4>
    <p> {{ oneroominfo[0].price }} 원</p>
  </div> -->
  
  <div v-for="(oneroominfo,i) in roominfo" :key="oneroominfo">
    <img :src="roominfo[i].image" class="room-img">
    <h4>{{ roominfo[i].title }}</h4>
    <p> {{ roominfo[i].price }} 원</p>
  </div>

  <div v-for="(roominfo,i) in oneroominfo" :key="i">
    <img :src="roominfo.image" class="room-img">
    <h4>{{ roominfo.title }}</h4>
    <p> {{ roominfo.price }} 원</p>
  </div>
</template>

<script>

import data from './assets/oneroom.js';

export default {
  name: 'App',
  data(){
    return{
      name : {name01 : '항동하버라인 10단지', name02 : '항동하버라인 9단지', name03 : '항동하버라인 8단지'},
      price : {price01 : 100, price02 : 150, price03 : 200},
      style : {style01 : 'color : red', style02 : 'color : green', style03 : 'color : #00b8ff'},
      className : { name01 : 'class01'},
      products :['역삼동원룸','천호동원룸','마포구원룸'],

      menus : ['Home', 'Shop', 'About'],

      singoNum : [0,0,0],
      modalchang : false,
      oneroominfo : data,
    }
  },
  methods:{
    increase(){
      this.singoNum[0] ++;
    },

  },

  components:{

  }
}
</script>

<style>
body {
  margin : 0
}

div {
  box-sizing : border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
#ImExport {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: rgb(57, 39, 173);
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color :white;
  padding: 10px;
}

</style>
