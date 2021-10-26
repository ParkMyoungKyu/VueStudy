<template>
  <appModal :roomobj="selectedRoomObject">
    <!-- Modal window insert -->
  </appModal>
  <div class="menu">
    <a v-for="(menuList, i) in menus" :key="i">{{ menuList }}</a>
  </div>
  <div class="content">
    <div v-for="(obj, i) in roomData" :key="i">
      <img :src="obj.image" alt="X"/>
      <h4 @click="modalViewSwitch(obj)">{{ obj.title }}</h4>
      <p>{{ obj.content }}</p>
      <p>{{ obj.price }}</p>
      <button @click="increase(obj)">허위매물신고</button>
      <span>신고수 : {{ obj.reportCnt }}</span>
    </div>
  </div>
</template>

<script>

import appModal from './components/App8-modal';
import data from './assets/js/oneroom.js';

export default {
  name: 'App8',
  data() {
    return {
      // 메뉴 명
      menus: ["Home", "Shop", "About"],
      // 원룸 상세정보 리스트
      roomData: data,
      // 신고 횟수
      reportCnt : [0, 0, 0, 0, 0, 0],
      // 모달창 on off 상태
      modalOpenFlag : false,
      selectedRoomObject : {},
      // 상세페이지

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
    appModal,
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
</style>
