<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div v-for="item in rooms" :key="item">
    <h4 :style="roomStyle">{{ item.roomName }} 원룸</h4>
    <p :style="priceStyle">{{ item.price }} 만원</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      roomStyle : 'color:blue',
      priceStyle : 'color:red',
      rooms : [
        {
          roomName : '갯마을',
          price : 50
        },
        {
          roomName : '차차차',
          price : 70
        },
        {
          roomName : '오징어',
          price : 30
        },
      ]
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
</style>
