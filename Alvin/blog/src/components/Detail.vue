<template>
  <router-link to="/list">뒤로가기</router-link>
  <div>{{ blogInfo.content }}</div>

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
  },
}
</script>

<style>

</style>