<template>
  <div class="black-bg" v-if="popModal == true">
    <div class="white-bg">
      <h4>{{ d_title }}</h4>
      <p>{{ d_content }}</p>
      <button @click="popModal=false;">닫기</button>
    </div>
  </div>
  <div class="menu">
    <a v-for="menu in menuList" :key="menu">{{menu}}</a>
  </div>
  <div v-for="(a,i) in products" :key="i">
    <img :src="a.image" class="room-img"/>
    <h4 @click="selectModal(i)">{{a.title}}</h4>
    <p>{{ a.price}}원 </p>
  </div>
</template>

<script>
import axios from 'axios';
import data from './assets/data/oneroom.js';
export default {
  name: 'App',
  data() {
    return {
      d_title : '',
      d_content : '',
      selItem : 0,
      popModal : false,
      sin_cnt : [0,0,0],
      menuList : ['Home', 'Products', "About"],
      products : data,
    }
  },
  methods : {
    selectModal : async function (tid) {
      try {
        const response = await axios.get('/test');
        this.d_title = response.data[tid].title;
        this.d_content = response.data[tid].content;
        this.popModal = true;
      } catch (err) {
        alert("에러~ 다시 시도!");
      }
    },
    selectModal2 : function (tId) {
      this.selItem = tId;
      this.popModal = true;
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
.room-img {
  width:100%;
  margin-top: 40px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.menu {
  background : darkslateblue;
  padding : 15px;
  border-radius : 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
</style>