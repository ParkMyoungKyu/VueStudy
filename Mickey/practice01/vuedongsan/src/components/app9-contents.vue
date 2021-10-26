<template>
  <div v-for="(obj, i) in card" :key="i">
    <img :src="obj.image" alt="X"/>
    <h4 @click="modalViewSwitch(obj)">{{ obj.title }}</h4>
    <p>{{ obj.content }}</p>
    <p>{{ obj.price }}</p>
    <button @click="increase(obj)">허위매물신고</button>
    <span>신고수 : {{ obj.reportCnt }}</span>
  </div>
</template>

<script>
export default {
  name: "app9-contents",
  props : {
    card : Object
  },
  methods : {
    // 허위사례신고 카운터
    increase(obj) {
      obj.reportCnt++;
    },
    // 모달 창 view 제어
    modalViewSwitch(obj) {
      this.modalOpenFlag = !this.modalOpenFlag;
      this.selectedRoomObject = obj;
      return this.modalOpenFlag;
    }
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
</style>