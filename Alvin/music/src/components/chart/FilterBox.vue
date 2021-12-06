<template>
  <slot name="a"></slot>
  <slot :resultCode="resultCode"></slot>
  <div style="display: inline-flex" :class="filter + ' filter-01'" v-for="filter in filters" :key="filter" :style="`background-image: url(${img})`">
    <div>
      <button class="btn btn-outline-light" style="width: 200px; height: 200px; opacity: 70%" @click="fire(filter)">{{ filter }}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  data(){
    return{
      resultCode : "난 자식에서 왔어",
      dataFire : "데이터 발사!!!!"
    }
  },
  props:{
    img : Array,
    filters: Array,
  },
  methods:{
    fire(data){
      this.emitter.emit('filterTran',data) ;
    }
  },
}
</script>

<style>
  .filter-01{
    width: 200px;
    height: 200px;
    margin: 50px 5px;
    background-repeat: no-repeat; /*반복 제어*/
    background-size: contain; /*너비랑 높이가 내용 안쪽에 알맞게 이미지 크기 적용*/
  }
</style>