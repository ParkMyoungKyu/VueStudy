<template>
  <div v-for="(obj, i) in card" :key="i">
    <img :src="obj.image" alt="X"/>
    <!-- Custom Event Send -->
<!--    <h4 @click="callOpenModal(obj)">{{ obj.title }}</h4>-->
    <h4 @click="$emit('open-modal', obj)">{{ obj.title }}</h4>
    <p>{{ obj.content }}</p>
    <p>{{ obj.price }}</p>
<!--    <button @click="callIncrease(obj)">허위매물신고</button>-->
    <button @click="$emit('report-cnt', obj)">허위매물신고</button>
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
    // 부모로 Object 전달
    callOpenModal(obj) {
      this.$emit("open-modal", obj);
    },
    callIncrease(obj) {
      this.$emit("report-cnt", obj);
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