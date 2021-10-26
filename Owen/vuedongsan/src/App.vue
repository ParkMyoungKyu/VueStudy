<template>
  <div v-if="1 == 1">
    안녕하세요
  </div>
  <div v-else>
    안녕하세요2
  </div>

    <div class="black-bg" v-if="모달창열렸니==true">
      <div class="white-bg">
        <h4>{{ onerooms[inputTitle].title }}</h4>
        <p>{{ onerooms[inputTitle].content }}</p>
        <p>{{ onerooms[inputTitle].price }}만원</p>
        <button @click="모달창열렸니=false">닫기</button>
      </div>
    </div>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <div v-for="(oneroom, k) in onerooms" :key="k">
    <img :src="oneroom.image" class="room-img">
    <h4 @click="모달창열렸니 = true; inputTitle = k">{{ oneroom.title }}</h4>
    <p>{{ oneroom.price }} 만원</p>
  </div>

</template>

<script>
import data from './assets/oneroom.js';

export default {
  name: 'App',
  data(){
    return {
      //데이터 보관함
      inputTitle : 0,
      onerooms : data,
      모달창열렸니 : false,
      신고수 : 0,
      신고수1 : 0,
      신고수2 : 0,
      스타일 : 'color:blue',
      menus : ['Home', 'Shop', 'About'],
      items : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : ['50', '60', '70']
    }
  },
  methods : {
    increase(){
      this.신고수 += 1;
    },
    increase1(){
      this.신고수1 += 1;
    },
    increase2(){
      this.신고수2 += 1;
    }
  },
  components: {
  }
}
</script>

<style>
body {
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}
.white-bg {
  width:  100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color:  white;
  padding: 10px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}


</style>
