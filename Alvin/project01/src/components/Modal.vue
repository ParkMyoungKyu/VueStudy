<template>
  <div class="black-bg" v-if="modalchang == true">
    <div class="white-bg">
      <Discount/>
      <img :src="oneroominfo[pushNum].image" class="room-img"/>
      <h4>{{ oneroominfo[pushNum].title }}</h4>
      <p>{{ oneroominfo[pushNum].content }}</p>
      <p>{{ oneroominfo[pushNum].price }} 원</p>
      <button v-on:click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
import discount from './Discount.vue';

export default {
  name: "Modal",
  props:{
    oneroominfo : Array,
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