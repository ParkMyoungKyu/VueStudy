<template>
  <div class="menu">
    <a v-for="(menuList, i) in menus" :key="i">{{ menuList }}</a>
  </div>
  <div v-for="(productList, i) in rooms" :key="i">
    <h4>{{ productList.name }}</h4>
    <p>{{ productList.price }}</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고수 : {{reportCnt[i]}}</span>
  </div>
</template>

<script>

export default {
  name: 'App4',
  data() {
    return {
      rooms: [
        { name: "역삼동 원룸", price: "50만원"},
        { name: "천호동 원룸", price: "100만원"},
        { name: "마포구 원룸", price: "200만원"},
      ],
      menus: ["Home", "Shop", "About"],
      reportCnt : [0, 0, 0]
    }
  },
  methods: {
    increase(i) {
      return this.reportCnt[i] += 1
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
  padding: 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding: 10px;
}
</style>
