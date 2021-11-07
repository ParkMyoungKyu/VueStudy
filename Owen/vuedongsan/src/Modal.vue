<template>
  <div class="black-bg" v-if="모달창열렸니==true">
      <div class="white-bg" >
        <img :src="onerooms[inputTitle].image" style="width:100%" >
        <h4>{{ onerooms[inputTitle].title }}</h4>
        <p>{{ onerooms[inputTitle].content }}</p>
        <!-- <input @input="month = $event.target.value"> -->
        <input :value="month" @input="changeKeyword"/>
        <!-- <input :value="keyword" @input="changeKeyword"/> -->
        <!-- <textarea v-model="month"></textarea> -->
        <!-- <select v-model="month">
          <option></option>
        </select> -->
        <input type="range" min="1" max="12">
        <p> {{ month }}개월 선택함 :  {{ onerooms[inputTitle].price * month }}만원</p>
        <!-- <p>keyword:{{ keyword }}</p> -->
        <button @click="send">닫기</button>
      </div>
    </div>
</template>

<script>
export default {
    name:'Modal',
    data(){
      return {
        month : 1,
        keyword:'',
      }
    },
    watch :{
      month(a){
        // a 변경 후
        // b 변경 전
        console.log("11111111111111");
        let w = a;
        alert(w);
        if (a >= 13){
          alert("입력한 수가 너무 큽니다.");
        }
      },
    },
    props :{
      onerooms : Array,
      inputTitle : Number,
      모달창열렸니 : Boolean
    },
    methods: {
      send(){
        this.$emit('closeModal')
      },
      changeKeyword(e){
        e.target.value = e.target.value.replace(/[^0-9.]/g, '1').replace(/(\..*)\./g, '1');
      }
    },
}
</script>

<style>

</style>