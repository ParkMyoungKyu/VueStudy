<template>
<div class="list_back">
  <div style="text-align: center; margin: 10px 0px">
    <button class="btn btn-light" @click="step = 0">오늘발매음악</button>
    <button class="btn btn-light" @click="step = 1">장르콜렉션</button>
    <button class="btn btn-light" @click="step = 2">보관함</button>
  </div>
  <div  v-if="step == 0"><Today/></div>
  <!--  <Today :List="todayChart"/>-->
  <div  v-else-if="step == 1"><Category/></div>
  <div  v-else-if="step == 2"><MyList/></div>
</div>
</template>

<script>
import Today from "./chart/Today.vue"
import Category from "./chart/Category.vue"
import MyList from "./chart/MyList.vue"

export default {
  name: "List",
  data(){
    return{
      step : 0,
    }
  },
  components:{
    Today : Today,
    Category : Category,
    MyList : MyList
  },
  props:{
  }

}
</script>

<style>
.list_back{
  margin: 10px;
}
</style>