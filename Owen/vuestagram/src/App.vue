<template>
  <div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step == 1" @click="step++">Next</li>
      <li v-if="step == 2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>

  <Container :이미지="이미지" :instarData="instarData" :step="step" />
  <button @click="more">더보기</button>

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
  </div>

  
  <div style="margin-top : 500px"></div>

</template>

<script>
import Container from './components/Container.vue'
import instarData from './assets/guestList.js'
import axios from 'axios'
axios.post()

export default {
  name: "App",
  data(){
    return {
      step : 0,
      instarData : instarData,
      count : 0,
      이미지 : '',
    }
  },
  components: { 
    Container : Container,
  },
  props :{
    onerooms : Array,
  },
  methods: {
    more(){
      
      axios.get('https://codingapple1.github.io/vue/more'+this.count+'.json')
      .then((result)=>{
        console.log(result.data);
        this.instarData.push(result.data);
      })
      this.count++;
    },
    upload(e){
      let uploadFile = e.target.files;
      console.log(uploadFile[0]);
      let url = URL.createObjectURL(uploadFile[0]);
      console.log(url);
      this.이미지 = url;
      this.step = 1;
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://placeimg.com/100/100/arch",
        postImage: "https://placeimg.com/640/480/arch",
        likes: 36,
        date: "May 15",
        liked: false,
        content: "오늘 무엇을 했냐면요 아무것도 안했어요 😫",
        filter: "perpetua"
      };
      this.instarData.unshift(내게시물);
      this.step = 0;
    }
  },
};
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
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
