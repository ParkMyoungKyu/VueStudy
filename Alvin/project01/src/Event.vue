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
  
  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 class="red" v-on:click="modalchang = true" :style="style.style01">{{ name.name01 }} </h4>
    <p>{{ price.price01 }} 만원</p>
    <button @click="increase">허위매물신고</button> <span>신고수 : {{ singoNum[0] }}</span>
  </div>
  <div>
     <img src="./assets/room1.jpg" class="room-img">
    <h4 class="blue" style="color : blue">{{ name.name02 }} </h4>
    <p>{{ price.price02 }} 만원</p>
    <button @click="singoNum[1]++">허위매물신고</button> <span>신고수 : {{ singoNum[1] }}</span>
  </div>
  <div>
     <img src="./assets/room2.jpg" class="room-img">
    <h4 class="green" style="color : green">{{ name.name03 }} </h4>
    <p>{{ price.price03 }} 만원</p>
    <button @click="singoNum[2]++">허위매물신고</button> <span>신고수 : {{ singoNum[2] }}</span>
  </div>
</template>

<script>

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
#event {
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
