<template>
  <div v-for="(blog, i) in blogData" :key="i">
      <router-link :to="`/detail/${i}`"><h4>{{blog.title}}</h4></router-link>
      <p>{{blog.date}}</p>
  </div>
</template>

<script>
export default {
    name: 'List',
    props : {
        blogData : Array,
    }
}
</script>

<style>

</style>