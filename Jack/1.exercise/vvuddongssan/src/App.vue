<template>
  <div class="black-bg" v-if="isVisibleModal">
    <div class="white-bg">
      <h4>상세페이지</h4>
      <p>상세페이지내용임</p>
      <button @click="hideDetail">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>
  <div v-for="(item,i) in rooms" :key="i">
    <img :src="item.roomImg"  class="roomImg">
    <h4 :style="roomStyle" @click="showDetail(item)">{{ item.roomName }} 원룸</h4>
    <p :style="priceStyle">{{ item.price }} 만원</p>
    <button @click="increaseAccusedCnt(item)">신고하기</button>
    <span>신고수 : {{ item.accusedCnt }}</span>
    <p></p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      isVisibleModal : false,
      roomStyle : 'color:blue',
      priceStyle : 'color:red',
      rooms : [
        {
          roomImg : require('./assets/room0.jpg'),
          roomName : '갯마을',
          price : 50,
          accusedCnt : 0
        },
        {
          roomImg : require('./assets/room1.jpg'),
          roomName : '차차차',
          price : 70,
          accusedCnt : 0
        },
        {
          roomImg : require('./assets/room2.jpg'),
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
    },
    showDetail(item){
      console.log("hahahah " + item.roomName);
      this.isVisibleModal = true;
    },
    hideDetail(){
      this.isVisibleModal = false;
    }
  },
  components: {
  }
}
</script>

<style>

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
img.roomImg {
  width: 500px;
}

.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}

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
