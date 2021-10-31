<template>
  <input @input="search($event)"/>
  <div class="board_wrapper">
    <div v-for="(item, i) in filterdList" :key="i">
      <ul class="board_tr" @click="showDetail(item)">
        <li>{{ item.title }}</li>
        <li>{{ item.name }} {{ item.date }}</li>
        <div class="board_detail" v-if="item.needShowDetail">
          <ul>
            <li> {{ item.contents }}</li>
            <li class="hash"> {{ item.tag }}</li>
          </ul>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import boardList from './assets/board_data';

export default {
  name: 'App',
  components: {
  },
  mounted() {
    this.filterdList = boardList;
  },
  data(){
    return {
      "boardList":boardList,
      "filterdList":[]
    }
  },
  methods:{
    showDetail(item){
      item.needShowDetail = !item.needShowDetail;
    },
    search(evt){
      let keyword = evt.target.value.toString();
      if(keyword.length > 0) {
        this.filterdList = this.boardList.filter(item => item.tag.indexOf(evt.target.value) > -1);
      } else {
        this.filterdList = this.boardList;
      }
    }
  }
}
</script>

<style>
@import url('./assets/board.css');
</style>
