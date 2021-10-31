<template>
  <div v-for="(item, i) in rooms" :key="i">
    <img :src="item.image"  class="roomImg">
    <h2 :style="roomStyle" @click="$emit('showDetail', item)">{{ item.title }}</h2>
    <h4>{{item.content}}</h4>
    <p :style="priceStyle">{{ item.price }} 원</p>
    <p></p>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    rooms:Array,
    priceStyle:String,
    roomStyle:String,
  }
}
</script>

<style scoped>

</style>