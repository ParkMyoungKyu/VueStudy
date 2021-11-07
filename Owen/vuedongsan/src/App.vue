<template>

  <div v-if="1 == 1">
    안녕하세요
  </div>
  <div v-else>
    안녕하세요2
  </div>

  <transition name="fade">
    <Modal @closeModal="모달창열렸니 = false; inputTitle = $event" :onerooms="onerooms" :inputTitle="inputTitle" :모달창열렸니="모달창열렸니" />
  </transition>
  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
<Discount v-if="showDiscount == true" />



<button @click="priceSort()">가격높은순정렬</button>
<button @click="priceDeSort()">가격낮은순정렬</button>
<button @click="nameSort()">가나다순정렬</button>
<button @click="sortBack()" >되돌리기</button>

<Card @openModal="모달창열렸니 = true; inputTitle = $event" :oneroom="onerooms[j]" v-for="(oneroom,j) in onerooms" :key="j"/>



</template>


<script>
import data from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal.vue';
import Card from './Card.vue';

setTimeout(function(){
  //실행할 코드

})

export default {
  name: 'App',
  data(){
    return {
      showDiscount : true,
      objects : { name : 'kim', }, 
      //데이터 보관함
      inputTitle : 0,
      onerooms : data,
      original : [...data], // 사본을 만드는 문법
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
    },
    priceSort(){
      this.onerooms.sort(function(a, b){
        return a.price - b.price
      })
    },
    priceDeSort(){
      this.onerooms.sort(function(a, b){
        return b.price - a.price
      })
    },
    nameSort(){
      this.onerooms.sort(function(a, b){
        var fi = a.title;
        var se = b.title;
        return fi.charCodeAt(0) - se.charCodeAt(0);
      })
    },
    sortBack(){
      //this.onerooms = this.original;//값을 공유해주세요
      this.onerooms = [...this.original];
    }
  },
  // setInterval(() => {
    
  // }, interval);  
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
  }
}
</script>

<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}

.fade-leave-from {
  transform: translateY(0px);
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  transform: translateY(-1000px);
}

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

.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>
