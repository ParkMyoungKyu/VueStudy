<template>
<div class="list_back">
  <Today/>
<!--  <Today :List="todayChart"/>-->
  <Category></Category>
  <MyList></MyList>
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