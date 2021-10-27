<template>
  <Modal :product="products[selItem]" :popModal="popModal" @closeModal="popModal=$event;"/>
  <base-input v-model="inputText" ></base-input>
  <div class="menu">
    <a v-for="menu in menuList" :key="menu">{{menu}}</a>
  </div>
  <Discount />
  <Card  v-for="(a,i) in products" :key="a" :product="products[i]" :monIn="inputText" @openModal="selectModal(i)"/>
</template>

<script>
import data     from './assets/data/oneroom.js';
import Discount from "./components/Discount";
import Modal    from "./components/Modal";
import Card     from "./components/Card";
import MonInput from "./components/MonInput";

export default {
  name: 'App',
  data() {
    return {
      inputText : 1,
      selItem : 0,
      popModal : false,
      sin_cnt : [0,0,0],
      menuList : ['Home', 'Products', "About"],
      products : data,
    }
  },
  methods : {
    selectModal : function (tId) {
      this.selItem = tId;
      this.popModal = true;
    },
  },
  components: {
    'base-input' : MonInput,
    Card,
    Modal,
    Discount : Discount,
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