<template>
  <div v-for="(blogInfo,i) in blog" :key="blogInfo">
<!--    <router-link to="/detail" v-on:click="$emit('detailIndex',i)">{{ blogInfo.title }}</router-link>-->
    <h4 v-on:click="$router.push('/detail/'+i)">{{ blogInfo.title }}</h4>
    <p>{{ blogInfo.date }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  data(){
    return {

    }
  },
  props : {
    blog : Array,
  }

}
</script>

<style>

</style>