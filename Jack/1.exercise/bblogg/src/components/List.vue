<template>
  <div v-for="(item, i) in blogList" :key="i">
    <h1 @click="$router.push('/detail/' + i)">{{ item.title }}</h1>
    <h7>{{ item.date }}</h7>
    <p>{{ item.content }}</p>
  </div>
</template>

<script>
export default {
  name: "List",
  props : {
    blogList : Array
  }
}
</script>

<style scoped>

</style>