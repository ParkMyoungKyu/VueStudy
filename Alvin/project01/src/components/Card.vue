<template>
    <div>
      <img :src="oneroominfo.image" class="room-img">
      <h4 v-on:click="$emit('openModal',oneroominfo.id)">{{ oneroominfo.id+1 }} : {{ oneroominfo.title }}</h4>
      <p> {{ oneroominfo.price }} 원</p>
    </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    oneroominfo : Object,
  }
}
</script>

<style>

</style>