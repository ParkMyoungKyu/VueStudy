<template>
  <transition name="ani01">
  <Modal :product="products[selItem]" :popModal="popModal" @closeModal="popModal=$event;"/>
  </transition>
  <div class="menu">
    <a v-for="menu in menuList" :key="menu">{{menu}}</a>
  </div>
  <Discount :disCnt = "disCnt" v-if="showDiscount == true"/>
  <button @click="priceSort()">가격순정렬</button> <button @click="backSort()">되돌리기</button>
  <Card  v-for="(a,i) in products" :key="a" :product="products[i]" @openModal="selectModal(i)"/>
</template>

<script>
import data     from './assets/data/oneroom.js';
import Discount from "./components/Discount";
import Modal    from "./components/Modal";
import Card     from "./components/Card";

export default {
  name: 'App',
  data() {
    return {
      selItem : 0,
      popModal : false,
      sin_cnt : [0,0,0],
      menuList : ['Home', 'Products', "About"],
      products : data,
      productsOrg : [...data],
      disCnt : 10,
      showDiscount: true,
    }
  },
  methods : {
    selectModal : function (tId) {
      this.selItem = tId;
      this.popModal = true;
    },
    priceSort() {
      this.products.sort(function (a,b) {
        return a.price - b.price;
      })
    },
    backSort() {
      this.products = [...this.productsOrg];
    },
  },
  mounted() {
    setInterval(()=> {
      if(this.disCnt > 0) this.disCnt--;
      else this.showDiscount = false;
    }, 1000);
  },
  components: {
    Card,
    Modal,
    Discount : Discount,
  }
}
</script>

<style>
.ani01-enter-from {
  opacity: 0;
}
.ani01-enter-active{
  transition: all 1s;
}
.ani01-enter-to{
  opacity: 1;
}
.ani01-leave-from {
  opacity: 1;
}
.ani01-leave-active{
  transition: all 2s;
}
.ani01-leave-to{
  opacity: 0;
}
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