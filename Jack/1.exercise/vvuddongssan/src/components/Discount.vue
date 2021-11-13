<template>
  <div class="discount" v-if="isVisible">
    <h2>지금 사면 {{ percent }}% 할인</h2>
  </div>
</template>

<script>

export default {
  name: "Discount",
  data() {
    return {
      percent : 20,
      isVisible: true,
      myInterval : ""
    }
  },
  mounted() {
    this.myInterval = setInterval(()=>{
      this.percent--;
    }, 150);
  },
  watch : {
    percent(p){
      if(p == 0){
        clearInterval(this.myInterval);
        this.isVisible = false;
      }
    }
  }
}
</script>

<style scoped>

</style>