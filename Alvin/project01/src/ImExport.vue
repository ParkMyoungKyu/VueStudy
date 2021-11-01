<template>

<!--  <div className="black-bg" v-if="modalchang == true">-->
<!--    <div className="white-bg">-->
<!--      <img :src="oneroominfo[pushNum].image" class="room-img"/>-->
<!--      <h4>{{ oneroominfo[pushNum].title }}</h4>-->
<!--      <p>{{ oneroominfo[pushNum].content }}</p>-->
<!--      <p>{{ oneroominfo[pushNum].price }} 원</p>-->
<!--      <button v-on:click="modalchang = false">닫기</button>-->
<!--    </div>-->
<!--  </div>-->

<!--  <div class="start" :class=" { end : modalchang }">-->
  <transition name="fade">
    <Modal :oneroominfo="oneroominfo"
           :modalchang="modalchang"
           :pushNum = "pushNum"
           @closeModal="modalchang = false"
    />
  </transition>
<!--  </div>-->

  <div className="menu">
    <a v-for="menulist in menus" :key="menulist">{{ menulist }}</a><br>
  </div>

  <Discount/>

  <button v-on:click="priceSortLow">가격낮은순 정렬</button>
  <button v-on:click="priceSortHigh">가격높은순 정렬</button>
  <button v-on:click="textSort">가나다순 정렬</button>
  <button v-on:click="priceFillter">40만원 이상 정렬</button>
  <button v-on:click="sortBack">되돌리기</button>
  <!-- <div>
    <img :src="oneroominfo[0].image" class="room-img">
    <h4>{{ oneroominfo[0].title }}</h4>
    <p> {{ oneroominfo[0].price }} 원</p>
  </div> -->

  <!--  <div v-for="(oneroominfo,i) in roominfo" :key="oneroominfo">-->
  <!--    <img :src="roominfo[i].image" class="room-img">-->
  <!--    <h4>{{ roominfo[i].title }}</h4>-->
  <!--    <p> {{ roominfo[i].price }} 원</p>-->
  <!--  </div>-->

  <Card @openModal="modalchang = true;
        pushNum = $event "
        :oneroominfo="oneroominfo[i]"
        v-for="(roominfo,i) in oneroominfo" :key="roominfo"/>
  <!--  <Card :oneroominfo="oneroominfo[1]"/>-->
  <!--  <Card :oneroominfo="oneroominfo[2]"/>-->
  <!--  <Card :oneroominfo="oneroominfo[3]"/>-->
  <!--  <Card :oneroominfo="oneroominfo[4]"/>-->
  <!--  <Card :oneroominfo="oneroominfo[5]"/>-->

<!--    <div v-for="(roominfo,i) in oneroominfo" :key="i">-->
<!--      <img :src="roominfo.image" class="room-img">-->
<!--      <h4 v-on:click ="modalchang = true; pushNum = i" >{{ roominfo.title }}</h4>-->
<!--      <p> {{ roominfo.price }} 원</p>-->
<!--    </div>-->


</template>

<script>

import data from './assets/oneroom.js';
import discount from './components/Discount.vue';
import modal from './components/Modal.vue';
import card from './components/Card.vue';

export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],

      menus: ['Home', 'Shop', 'About'],

      singoNum: [0, 0, 0],
      modalchang: false,
      oneroominfo: data,
      originalInfo : [...data], // 원본 데이터 카피
      pushNum: 0,
    }
  },
  methods: {
    increase() {
      this.singoNum[0]++;
    },
    priceSortLow(){
      var array = [4,10,2,1];
      // 문자정렬
      console.log("1 : " + array.sort());
      // 숫자정렬
      console.log("2 : " +  array.sort(function(a,b){
        return a-b
      }));
      //this.sortBack();
      this.oneroominfo.sort(function(a,b){
        return a.price-b.price
      });
    },
    priceSortHigh(){
      //this.sortBack();
      this.oneroominfo.sort(function(a,b){
        return b.price-a.price
      })
    },
    textSort(){
      this.oneroominfo = this.oneroominfo.sort(function (a,b){
        /* sort 공부! */
        return a.title > b.title ? -1 : a.title < b.title ? 1 : 0;
      })
    },
    priceFillter(){
      this.oneroominfo = this.oneroominfo.filter(function(data) {
        return data.price > 400000;
      })
    },
    sortBack(){
      // this.oneroominfo.sort(function(a,b){
      //   return a.id-b.id
      // });
      console.log(this.originalInfo);
      console.log([...this.originalInfo]);
      this.oneroominfo = [...this.originalInfo]; // array에서 =는값을 대입하는것이 아닌 값을 공유하는것
    }
  },
  components: {
    Discount: discount,
    Modal : modal,
    Card: card,
  }
}
</script>

<style>
.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
  transition: all 1s;
}
.fade-leave-to{
  opacity: 0;
}

.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}


.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}

body {
  margin: 0
}

div {
  box-sizing: border-box;
}
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 50%;
  margin-top: 40px;
}

#ImExport {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: rgb(57, 39, 173);
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>
