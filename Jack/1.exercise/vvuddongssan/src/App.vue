<template>
  <div class="menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="(item,i) in rooms" :key="i">
    <h4 :style="roomStyle">{{ item.roomName }} 원룸</h4>
    <p :style="priceStyle">{{ item.price }} 만원</p>
    <button @click="increaseAccusedCnt(item)">신고하기</button>
    <span>신고수 : {{ item.accusedCnt }}</span>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      roomStyle : 'color:blue',
      priceStyle : 'color:red',
      rooms : [
        {
          roomName : '갯마을',
          price : 50,
          accusedCnt : 0
        },
        {
          roomName : '차차차',
          price : 70,
          accusedCnt : 0
        },
        {
          roomName : '오징어',
          price : 30,
          accusedCnt : 0
        },
      ]
    }
  },
  methods:{
    increaseAccusedCnt(item){
      item.accusedCnt++;
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a{
  color: white;
  padding: 10px;
}
</style>
