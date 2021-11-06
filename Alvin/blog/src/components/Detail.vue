<template>
  <router-link to="/list">뒤로가기</router-link>
<!--  <div>{{ blogInfo.title }}</div>-->
<!--  <div>{{ blogInfo.content }}</div>-->
  <div>{{ blog[$route.params.index].title }}</div>
  <div>{{ blog[$route.params.index].content }}</div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Detail",
  data(){
    return{

    }
  },
  props : {
    blogInfo : Object,
    blog : Array, // router 파라미터 테스트를 위해 App.vue에서 가져옴
  },


}
</script>

<style>

</style>