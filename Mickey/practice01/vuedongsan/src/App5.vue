<template>
  <div class="modal">
    <div class="black-bg" v-if="modalOpenFlag == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용임</p>
        <button class="modal-close-btn" @click="modalClose()">닫기</button>
      </div>
    </div>
  </div>

  <div class="menu">
    <a v-for="(menuList, i) in menus" :key="i">{{ menuList }}</a>
  </div>
  <div class="content">
    <div v-for="(productList, i) in rooms" :key="i">
      <img :src="roomImagesURL[i]" alt="X"/>
      <h4>{{ productList.name }}</h4>
      <p>{{ productList.price }}</p>
      <button @click="increase(i)">허위매물신고</button>
      <span>신고수 : {{ reportCnt[i] }}</span>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App5',
  data() {
    return {
      rooms: [
        { name: "역삼동 원룸", price: "50만원"},
        { name: "천호동 원룸", price: "100만원"},
        { name: "마포구 원룸", price: "200만원"},
      ],
      menus: ["Home", "Shop", "About"],
      reportCnt : [0, 0, 0],
      // 이미지
      roomImagesURL: [require("./assets/room0.jpg"), require("./assets/room1.jpg"), require("./assets/room2.jpg")],
      // 모달창 on off 상태
      modalOpenFlag : true,

    }
  },
  methods: {
    increase(i) {
      return this.reportCnt[i] += 1
    },
    modalClose() {
      if (this.modalOpenFlag == true) {
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
  background: firebrick;
}
</style>
