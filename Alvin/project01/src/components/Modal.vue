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
      <p>{{ month }}개월 선택함 : {{ oneroominfo[pushNum].price * month }} 원</p>
      <button v-on:click="dataClear(); $emit('closeModal')">닫기</button>

      <!-- 샤넬이 이야기한 한글입력문제 대안법 -->
      <p>한글입력 테스트</p>
      <input v-on:value="krErr" v-on:input="krErr = $event.target.value">
      <p> 데이터 타입 : {{ krErrType }}</p>
      <p> 한글 바인딩 데이터 : {{ krErr}}</p>

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
      krErr : 1,
      krErrType : "",
    }
  },
  watch : {
    month(data,hisData){
      console.log(isNaN(data));
      console.log(hisData + " => " + data);
      // v-model 로만 사용했을 경우 inNaN을 이용하는게 좋다(글자 : true, 숫자 : false)
      if(data >= 15){
        alert("15이상 입력할 수 없습니다.");
        this.month = hisData;
      }else if(typeof data != 'number'){
        alert("숫자만 입력 가능합니다.");
        this.month = hisData;
      }
    }
  },
  methods:{
    krChandge(e){
      this.krErr = e.target.value;
    },
    dataClear(){
      this.month = 1;
      this.krErr = "";
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