<template>
  <div>
    <h5>{{ blogInfo.title }}</h5>
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
    blogInfo : Array,
  }

}
</script>

<style>

</style>