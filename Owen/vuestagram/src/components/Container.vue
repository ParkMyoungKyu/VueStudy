<template>
  <div>
  <Post :instarData="instarData[0]"/>
  <!-- <Post/>
  <Post/> -->
  {{instarData}}
</div>
</template>

<script>
import Post from './Post.vue'

export default {
    name: "Container",
  components: { 
    Post : Post,
    
  },
  props :{
      instarData : Object,
  }
}
</script>

<style>

</style>