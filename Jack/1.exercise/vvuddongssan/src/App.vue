<template>

  <Modal @hideDetail="hideDetail()" :isVisibleModal="isVisibleModal" :selectedItem="selectedItem"/>

  <div class="menu">
    <a>Home</a>
    <a>Product</a>
    <a>About</a>
  </div>

  <Discount/>

  <Card @showDetail="showDetail($event)" :rooms="rooms" :roomStyle="roomStyle" :priceStyle="priceStyle"/>

</template>

<script>

import roomList from './assets/data/roomlist';
import Discount from "@/components/Discount";
import Modal from "@/components/Modal";
import Card from "@/components/Card";


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
      this.isVisibleModal = true;
      this.selectedItem = item;
    },
    hideDetail(){
      this.isVisibleModal = false;
    }
  },
  components: {
    Card,
    Modal,
    Discount
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
  cursor: pointer;
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

.discount{
  background: cadetblue;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
}
</style>
