<template>
  <div class="black-bg" v-if="modalchang == true">
    <div class="white-bg">
      <Discount/>
      <img :src="oneroominfo[pushNum].image" class="room-img"/>
      <h4>{{ oneroominfo[pushNum].title }}</h4>
      <p>{{ oneroominfo[pushNum].content }}</p>
<!--      <input v-on:input="month = $event.target.value">-->
      <input v-model.number="month">
<!--      <select v-model="month">-->
<!--        <option>01</option>-->
<!--        <option>02</option>-->
<!--        <option>03</option>-->
<!--      </select>-->
      <p>{{ month }}개월 선택함 : {{ oneroominfo[pushNum].price + month }} 원</p>
      <button v-on:click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import discount from './Discount.vue';

export default {
  name: "Modal",
  data(){
    return{
      month : 1, // 초기값이 숫자여도 데이터를 입력하면 문자로 저장이된다
    }
  },
  props:{
    oneroominfo : Object,
    modalchang : Boolean,
    pushNum : Number,
  },
  components:{
    Discount:discount,
  }
}
</script>

<style>
.discount {
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
</style>