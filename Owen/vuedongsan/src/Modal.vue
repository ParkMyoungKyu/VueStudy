<template>
  <div class="black-bg" v-if="모달창열렸니==true">
      <div class="white-bg">
        <img :src="onerooms[inputTitle].image" style="width:100%" >
        <h4>{{ onerooms[inputTitle].title }}</h4>
        <p>{{ onerooms[inputTitle].content }}</p>
        <!-- <input @input="month = $event.target.value"> -->
        <input v-model.number="month">
        <!-- <textarea v-model="month"></textarea> -->
        <!-- <select v-model="month">
          <option></option>
        </select> -->
        <p> {{ month }}개월 선택함 :  {{ onerooms[inputTitle].price * month }}만원</p>
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
      }
    },
    props :{
      onerooms : Array,
      inputTitle : Number,
      모달창열렸니 : Boolean
    },
    methods: {
      send(){
        this.$emit('closeModal')
      }
    },
}
</script>

<style>

</style>