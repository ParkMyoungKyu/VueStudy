<template>
  <div class="white-bg">
    <h4>원룸 상세 정보</h4>
    <p>{{ roomdetaildata.title }}</p>
    <img :src="roomdetaildata.image" alt="X"/>
    <p>{{ roomdetaildata.content }}</p>
    <p>{{ roomdetaildata.price }}</p>
<!--    <button class="modal-close-btn" @click="modalViewSwitch()">닫기</button>-->
  </div>
</template>

<script>
export default {
  name: "app9-modal",
  props: {
    roomdetaildata : Object
  },
}
</script>
<style>
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}
.modal-close-btn {
  background: red;
}
</style>