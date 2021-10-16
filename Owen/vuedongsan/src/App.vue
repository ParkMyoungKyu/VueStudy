<template>

  <div class="menu">
    <a v-for="(menu, i) in menus" :key="i">{{ menu }}</a>
  </div>
  <div v-for="(item, j) in items" :key="j">
    <h4 class="red" :style="스타일">{{ item }}</h4>
    <p>{{ price[j] }} 만원</p>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      //데이터 보관함
      스타일 : 'color:blue',
      menus : ['Home', 'Shop', 'About'],
      items : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      price : ['50', '60', '70']
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
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color:  white;
  padding: 10px;
}
</style>
