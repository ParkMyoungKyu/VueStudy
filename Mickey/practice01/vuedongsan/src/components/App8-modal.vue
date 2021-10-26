<template>
  <div class="modal">
    <div class="black-bg" v-if="modalOpenFlag">
      <div class="white-bg">
        <h4>원룸 상세 정보</h4>
        <p>{{ selectedRoomObject.title }}</p>
        <img :src="selectedRoomObject.image" alt="X"/>
        <p>{{ selectedRoomObject.content }}</p>
        <p>{{ selectedRoomObject.price }}</p>
        <button class="modal-close-btn" @click="modalViewSwitch()">닫기</button>
      </div>
    </div>
  </div>
</template>

<script>

import data from '../assets/js/oneroom.js';

export default {
  name: 'App8-modal',
  data() {
    return {
      // 원룸 상세정보 리스트
      roomData: data,
      // 신고 횟수
      modalOpenFlag : false,
      selectedRoomObject : {},
      // 상세페이지

    }
  },
  methods: {
    // 모달 창 view 제어
    modalViewSwitch(obj) {
      this.modalOpenFlag = !this.modalOpenFlag;
      this.selectedRoomObject = obj;
      return this.modalOpenFlag;
    }
  },
}
</script>

<style>
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
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
