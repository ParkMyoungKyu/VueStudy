<template>
  <div class="modal">
    <div class="black-bg" v-if="modalOpenFlag">
      <div class="white-bg">
        <h4>원룸 상세 정보</h4>
        <p>상세페이지내용임</p>
        <button class="modal-close-btn" @click="modalViewSwitch()">닫기</button>
      </div>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menuList, i) in menus" :key="i">{{ menuList }}</a>
  </div>
  <div class="content">
    <div v-for="(obj, i) in roomData" :key="i">
      <img :src="obj.image" alt="X"/>
      <button @click="modalViewSwitch()">상세</button>
      <h4>{{ obj.title }}</h4>
      <p>{{ obj.content }}</p>
      <p>{{ obj.price }}</p>
      <button @click="increase(obj)">허위매물신고</button>
      <span>신고수 : {{ obj.reportCnt }}</span>
    </div>
  </div>
</template>

<script>

import data from './assets/js/oneroom.js';

export default {
  name: 'App6',
  data() {
    return {
      testCnt: 0,

      menus: ["Home", "Shop", "About"],
      // 원룸 상세정보 리스트
      roomData: data,
      // 신고 횟수
      reportCnt : [0, 0, 0, 0, 0, 0],
      // 이미지
      roomImagesURL: [require("./assets/images/room0.jpg"), require("./assets/images/room1.jpg"), require("./assets/images/room2.jpg")],
      // 모달창 on off 상태
      modalOpenFlag : false,

    }
  },
  methods: {
    increase(obj) {
      obj.reportCnt++;
    },
    modalViewSwitch() {
      if (this.modalOpenFlag === true) {
        return this.modalOpenFlag = false;
      } else {
        return this.modalOpenFlag = true;
      }
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin : 0;
}
div {
  box-sizing: border-box;
}
.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding: 10px;
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
