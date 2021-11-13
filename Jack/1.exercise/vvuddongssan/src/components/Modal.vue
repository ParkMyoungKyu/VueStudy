<template>
  <div class="black-bg" v-if="isVisibleModal">
    <div class="white-bg">
      <Discount/>
      <img :src="selectedItem.image" class="roomImg">
      <h4>{{ selectedItem.title }}</h4>
      <p>{{ selectedItem.content }}</p>
      <input v-model.number="month"/>
      <p>{{month}} 개월 선택함</p> <p>{{ month * selectedItem.price}}원</p>
      <button @click="$emit('hideDetail')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data(){
    return {
      month : 1,
      date : 123
    }
  },
  watch : {
    month(a){
      if(isNaN(a)){
        alert("숫자만 입력하셈");
        this.month = 1;
      }
    }
  },
  updated() {
    if(this.month == 2){
      alert("2는안됨");
    }
  },
  props : {
    isVisibleModal : Boolean,
    selectedItem : Object,
  }
}
</script>

<style scoped>

</style>