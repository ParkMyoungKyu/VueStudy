<!-- 데이터 바인딩 테스트 -->
<template>
  <div class="menu" v-for="(productList, i) in rooms" :key="i">
    <h4>{{ productList.name }}</h4>
    <p>{{ productList.price }}</p>
  </div>
</template>

<script>

export default {
  name: 'App2',
  data() {
    return {
      rooms: [
        { name: "역삼동 원룸", price: "50만원"},
        { name: "천호동 원룸", price: "100만원"},
        { name: "마포구 원룸", price: "200만원"},
      ],
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
