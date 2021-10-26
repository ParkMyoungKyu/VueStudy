<template>
  <div>
    <img :src="product.image" class="room-img"/>
    <h4 @click="send">{{product.title}}</h4>
    <p>{{ product.price}}원 부터</p>
  </div>
</template>

<script>
export default {
  name : 'Card',
  props : {
    product : Object,
  },
  methods : {
    send : function () {
      this.$emit('openModal');
    }
  },
}
</script>

<style>

</style>