<template>
  <div class="black-bg" v-if="popModal == true">
    <div class="white-bg">
      <img :src="product.image" style="width: 100%" />
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <input v-model="month">
      <p> {{ product.price }} 원 * {{month}} 개월 = {{ product.price * month}}원</p>
      <button @click="$emit('closeModal', false)">닫기</button>
    </div>
  </div>
</template>

<script>
export default {
  name : 'Modal',
  props : {
    product : Array,
    selItem : Number,
    popModal: Boolean,
  },
  data() {
    return {
      month : 6,
    }
  },
  watch : {
    month(a,b) {
      if(isNaN(a)) {
        alert("숫자만");
        this.month = b;
      }
    }
  },
  beforeUpdate() {
    if((this.month % 6) > 0) {
      alert("6개월 단위로만 가능");
      this.month = 6;
    }
  },
  methods : {
  },
}
</script>

<style>

</style>