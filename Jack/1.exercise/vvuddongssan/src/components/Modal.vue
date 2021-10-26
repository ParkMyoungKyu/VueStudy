<template>
  <div class="black-bg" v-if="isVisibleModal">
    <div class="white-bg">
      <Discount/>
      <img :src="selectedItem.image" class="roomImg">
      <h4>{{ selectedItem.title }}</h4>
      <p>{{ selectedItem.content }}</p>
      <textarea v-model.number="month"></textarea>
      <select v-model.number="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option value="44">4</option>
      </select>
      <p>{{month}} 개월 선택함</p> <p>{{ selectedItem.price * month }}원</p>
      <button @click="$emit('hideDetail')">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data(){
    return {
      month : 1
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