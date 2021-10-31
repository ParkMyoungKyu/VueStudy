<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{원룸들[누른거].title}}</h4>
      <p>{{원룸들[누른거].content}}</p>
      <!-- <input @input="month = $event.tartget.value"> -->
      <input v-model="month">
      <p>{{month}} 개월 선택함 : {{원룸들[누른거].price * month}}</p>
      <button @click="$emit('closeModal')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
    name : 'Modal',
    data(){
      return {
          month : 1,
      }
    },
    // 데이터 감시 watch : { 감시할데이터(){} } 
    watch : {
      month(a){
        // month 데이터가 변할때마다 여기 코드가 실행
        if(a > 13){
          alert("13보다 큽니다!");
        }
        if(isNaN(a)){
          alert("숫자만 입력가능");
        }
      },
    },
    props : {
      원룸들 :Array,
      누른거 : Number,
      모달창열렸니 : Boolean,
    }
}
</script>

<style>

</style>