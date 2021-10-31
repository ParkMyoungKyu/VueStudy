<template>

<div v-if="1 == 2">
  안녕하세요
</div>
<div v-else-if="1==3">
  안녕하십니까
</div>

 <Modal/>

  <div class="menu">
    <a v-for="(a,i) in menu" :key="i">{{ a }}</a>
  </div>


  <Disconut/>


  <div v-for="(a,i) in 원룸들" :key="i">
    <img :src = "a.image" class="room-img">
    <h4>{{a.content}}</h4>
    <p>>{{a.price}}원</p>
    <button @click="모달창열렸니 = true; 누른거 = i">모달</button>
  </div>

</template>

<script>

import roomData from './assets/oneroom.js';
import Discount from './Discount.vue';
import Modal from './Modal';

export default {
  name: 'App',
  data(){
    return {
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

    }
  },
  components: {
     Discount : Discount,
     Modal,
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
.dicount {
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
