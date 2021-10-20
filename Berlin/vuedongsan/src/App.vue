<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="menu">
    <a v-for="(a,i) in menu" :key="i">{{ a }}</a>

  </div>
  <div>
    <h4>{{ products[0]}} 원룸</h4>
    <p>{{ price1 }} 만원</p>
  </div>
  <div>
    <h4>{{products[1]}} 원룸</h4>
    <p>{{ price2 }} 만원</p>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      price1 : 60,
      price2 : 70,
      products : ['역삼동원룸','천호동원룸'],
      menu : ['Home', 'Product' ,'About'],
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

.menu {
  background: darkslateblue;
  padding:15px;
}

.menu a{
  color:white;
  padding : 10px;
}
</style>
