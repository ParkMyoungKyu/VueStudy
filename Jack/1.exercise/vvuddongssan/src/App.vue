<template>
  <div class="black-bg" v-if="isVisibleModal">
    <div class="white-bg">
      <img :src="selectedItem.image" class="roomImg">
      <h4>{{ selectedItem.title }}</h4>
      <p>{{ selectedItem.content }}</p>
      <button @click="hideDetail">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>
  <div v-for="(item,i) in rooms" :key="i">
    <img :src="item.image"  class="roomImg">
    <h2 :style="roomStyle" @click="showDetail(item)">{{ item.title }}</h2>
    <h4>{{item.content}}</h4>
    <p :style="priceStyle">{{ item.price }} 원</p>
    <p></p>
  </div>
</template>

<script>

import roomList from './assets/data/roomlist';


export default {
  name: 'App',
  data(){
    return {
      isVisibleModal : false,
      roomStyle : 'color:blue',
      priceStyle : 'color:red',
      selectedItem : {},
      rooms : roomList
    }
  },
  methods:{
    increaseAccusedCnt(item){
      item.accusedCnt++;
    },
    showDetail(item){
      console.log("hahahah " + item.roomName);
      this.isVisibleModal = true;
      this.selectedItem = item;
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
h2{
  text-decoration-line: underline;
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
