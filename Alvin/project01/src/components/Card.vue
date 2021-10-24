<template>
    <div>
      <img :src="oneroominfo.image" class="room-img">
      <h4 v-on:click="$emit('openModal',oneroominfo.id)">{{ oneroominfo.title }}</h4>
      <p> {{ oneroominfo.price }} 원</p>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    oneroominfo : Array,
  }
}
</script>

<style>

</style>