<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div>
      <h4 class="red" :style="style.style01">{{ name.name01 }} 원룸</h4>
      <p>{{ price.price01 }} 만원</p>
  </div>
  <div>
      <h4 class="blue" style="color : blue">{{ name.name02 }} 원룸</h4>
      <p>{{ price.price02 }} 만원</p>
  </div>
   -------------------- 숙제 --------------------
  <div>
    <h4 :style="style.style01">{{ products[0] }}</h4> - {{ price.price01 }} 만원
    <h4 :style="style.style02">{{ products[1] }}</h4> - {{ price.price02 }} 만원
    <h4 :style="style.style03">{{ products[2] }}</h4> - {{ price.price03 }} 만원
  </div>
</template>

<script>
 
export default {
  name: 'App',
  data(){
    return{
      name : {name01 : 'Vue', name02 : 'JS'},
      price : {price01 : 100, price02 : 150, price03 : 200},
      style : {style01 : 'color : red', style02 : 'color : green', style03 : 'color : #00b8ff'},
      products :['역삼동원룸','천호동원룸','마포구원룸']
    }
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
  margin-top: 60px;
}
</style>
