<template>
<div>
  <h4>{{blogList[$route.params.id].title}} 상세내용이라네</h4>
</div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "Detail",
  props : {
    blogList : Array
  }
}
</script>

<style scoped>

</style>