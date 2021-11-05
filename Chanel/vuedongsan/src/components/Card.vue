<template>
  <div>
    <img :src="product.image" class="room-img"/>
    <h4 @click="send">{{product.title}}</h4>
    <p>{{ product.price }}원 </p>
  </div>
</template>

<script>
export default {
  name : 'Card',
  props : {
    product : Object,
    monIn : Number,
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