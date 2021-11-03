<template>
  <div class="discount">
    <h4>지금 결제하면 {{ discountPer }}% 할인</h4>
  </div>
</template>

<script>
export default {
  name: "Discount",
  props : {
    discountPer : Number,
  }
}
</script>

<style>

</style>