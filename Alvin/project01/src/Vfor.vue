<template>

<div class="menu">
  <a v-for="menulist in menus" :key="menulist">{{ menulist }}</a><br>
  <!-- <a v-for="(menulist2,i) in menus" :key="i"> {{menulist2}} : {{ i }}</a> -->
</div>
  <div v-for="(dangilist,i) in list" :key="dangilist">
    <h4>{{ dangilist }}</h4>
    <p>{{ price[i] }}만원</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      price : [100, 150,200],
      menus : ['Home', 'Shop', 'About'],
      list : ['항동하버라인 10단지','항동하버라인 9단지','항동하버라인 8단지'],
    }
  },
  components:{
    
  }
}
</script>

<style>
#Vfor {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: rgb(57, 39, 173);
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color :white;
  padding: 10px;
}

</style>
