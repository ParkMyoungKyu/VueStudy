<template>

<div v-if="1 == 2">
  안녕하세요
</div>
<div v-else-if="1==3">
  안녕하십니까
</div>

<transition name="fade">
 <Modal :원룸들="원룸들" :누른거="누른거" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false"/>
</transition>

  <div class="menu" :class="{ end : 모달창열렸니 }">
    <a v-for="(a,i) in menu" :key="i">{{ a }}</a>
  </div>

  <Card @openModal="모달창열렸니 = true; 누른거=$event " :원룸="원룸들[i]" v-for="(작명, i) in 원룸들" :key="작명"/>

  <Discount/>

<button @click="priceSort">가격순정렬</button>
<button @click="priceReverseSort">가격역순정렬</button>
<button @click="sortBack">되돌리기</button>
  

</template>

<script>

import roomData from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal';
import Card from './Card';

export default {
  name: 'App',
  data(){
    return {
      원룸들오리지널 : [...roomData],
      누른거: 0,
      원룸들 : roomData,
      모달창열렸니 : false,
      price1 : 60,
      price2 : 70,
      products : ['역삼동원룸','천호동원룸'],
      menu : ['Home', 'Product' ,'About'],
    }
  },
  methods : {
    increase() {

    },
    sortBack(){
      this.웜룸들 = this.원룸들오리지널;
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price
      })
    },
    priceReverseSort(){

    }
  },
  components: {
     Discount : Discount,
     Modal,
     Card,
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

body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.discount {
  background : #eee;
  padding : 10px;
  margin : 10px;
  border-radius: 5px;
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

.menu {
  background: darkslateblue;
  padding:15px;
}

.menu a{
  color:white;
  padding : 10px;
}
</style>
