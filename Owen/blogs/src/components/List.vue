<template>
  <div>
      <h5>{{blogList[0].title}}</h5>
      <p>{{blogList[0].date}}</p>
  </div>
  <div>
      <h5>{{blogList[1].title}}</h5>
      <p>{{blogList[1].date}}</p>
  </div>
  <div>
      <h5>{{blogList[2].title}}</h5>
      <p>{{blogList[2].date}}</p>
  </div>
</template>

<script>
export default {
    name : 'list',
    props : {
        blogList : Array
    }
}
</script>

<style>

</style>