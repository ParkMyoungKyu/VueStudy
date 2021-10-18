<template>

<div class="menu">
  <a v-for="menulist in menus" :key="menulist">{{ menulist }}</a><br>
  <!-- <a v-for="(menulist2,i) in menus" :key="i"> {{menulist2}} : {{ i }}</a> -->
</div>
 <!-- -------------------- 숙제 start -------------------- -->
  
  <!-- <div v-for="dangilist in list" :key="dangilist">
    <h4>{{ dangilist }}</h4>
    <p>만원</p>
  </div> -->

 <!-- -------------------- 숙제 end -------------------- -->
  <div>
      <h4 class="red" :style="style.style01">{{ name.name01 }} </h4>
      <p>{{ price.price01 }} 만원</p>
      <button @click="increase">허위매물신고</button> <span>신고수 : {{ singoNum[0] }}</span>
  </div>
  <div>
      <h4 class="blue" style="color : blue">{{ name.name02 }} </h4>
      <p>{{ price.price02 }} 만원</p>
      <button @click="singoNum[1]++">허위매물신고</button> <span>신고수 : {{ singoNum[1] }}</span>
  </div>
  <div>
      <h4 class="green" style="color : green">{{ name.name03 }} </h4>
      <p>{{ price.price03 }} 만원</p>
      <button @click="singoNum[2]++">허위매물신고</button> <span>신고수 : {{ singoNum[2] }}</span>
  </div>
   <!-- -------------------- 데이터 바인딩 숙제 start -------------------- -->
  <!-- <div>
    <h4 :class='className.name01' :style="style.style01">{{ products[0] }}</h4> - {{ price.price01 }} 만원
    <h4 :style="style.style02">{{ products[1] }}</h4>  {{ price.price02 }} 만원
    <h4 :style="style.style03">{{ products[2] }}</h4>  {{ price.price03 }} 만원
  </div> -->
  <!-- -------------------- 데이터 바인딩 숙제 end -------------------- -->
</template>

<script>
 
export default {
  name: 'App',
  data(){
    return{
      name : {name01 : '항동하버라인 10단지', name02 : '항동하버라인 9단지', name03 : '항동하버라인 8단지'},
      price : {price01 : 100, price02 : 150, price03 : 200},
      style : {style01 : 'color : red', style02 : 'color : green', style03 : 'color : #00b8ff'},
      className : { name01 : 'class01'},
      products :['역삼동원룸','천호동원룸','마포구원룸'],

      menus : ['Home', 'Shop', 'About'],

      singoNum : [0,0,0],
    }
  },
  methods:{
    increase(){
      this.singoNum[0] ++;
    },

  },

  components:{
    
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
  background: rgb(57, 39, 173);
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color :white;
  padding: 10px;
}

</style>
