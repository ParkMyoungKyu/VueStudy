<!-- 데이터 바인딩 테스트 -->
<template>
  <div>
    <h4>{{ products[0] }}</h4>
    <p>{{ prices[0] }}</p>
  </div>
  <div>
    <h4>{{ products[1] }}</h4>
    <p>{{ prices[1] }}</p>
  </div>
  <div>
    <h4>{{ products[2] }}</h4>
    <p>{{ prices[2] }}</p>
  </div>


  <div class="modal-window">
    <div class="black-bg">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지내용</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      products: ['역삼동원룸', '천호동원룸', '마포구원룸'],
      prices: ['50만원', '100만원', '150만원'],
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
