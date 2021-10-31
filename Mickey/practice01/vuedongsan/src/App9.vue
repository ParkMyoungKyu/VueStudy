<template>
  <!-- Modal Start -->
  <div class="modal">
    <div class="black-bg" v-if="modalOpenFlag">
      <roomDetailModal :roomdetaildata="selectedRoomObject" />
      <button class="modal-close-btn" @click="modalViewSwitch()">닫기</button>
    </div>
  </div>

  <!-- Modal End -->

  <!-- Menu Start -->
  <div class="menu">
    <a v-for="(menuList, i) in menus" :key="i">{{ menuList }}</a>
  </div>
  <!-- Menu End -->

  <!-- Content Start -->
  <div class="content">
    <appContents @open-modal="modalViewSwitch" @report-cnt="increase" :card="roomData" />
<!--
    <div v-for="(obj, i) in roomData" :key="i">
      <img :src="obj.image" alt="X"/>
      <h4 @click="modalViewSwitch(obj)">{{ obj.title }}</h4>
      <p>{{ obj.content }}</p>
      <p>{{ obj.price }}</p>
      <button @click="increase(obj)">허위매물신고</button>
      <span>신고수 : {{ obj.reportCnt }}</span>
    </div>
-->
  </div>
  <!-- Content End -->
</template>

<script>

import data from './assets/js/oneroom.js';
import roomDetailModal from './components/app9-modal.vue';
import appContents from './components/app9-contents.vue';

export default {
  name: 'App9',
  data() {
    return {
      // 메뉴 명
      menus: ["Home", "Shop", "About"],
      // 원룸 상세정보 리스트
      roomData: data,
      reportCnt : [0, 0, 0, 0, 0, 0],
      modalOpenFlag : false,
      selectedRoomObject : {},
    }
  },
  methods: {
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
  },
  components: {
    roomDetailModal,
    appContents
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
