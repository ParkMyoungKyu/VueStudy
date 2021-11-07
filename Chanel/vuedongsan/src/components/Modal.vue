<template>
  <div class="black-bg" v-if="popModal == true">
    <div class="white-bg">
      <img :src="product.image" style="width: 100%" />
      <h4>{{ product.title }}</h4>
      <p>{{ product.content }}</p>
      <input name="iMonths" v-model="month">
      <p> {{month}} 개월 {{ product.price * month}}원</p>
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
      month : 1,
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
  methods : {
  },
}
</script>

<style>

</style>