<template>
  <div class="p-sm-5 mb-2 bg-opacity-10 text-black shadow-lg">
    <div class="album py-5 bg-light">
      <div class="container">
        <h4>오늘 발매 음악</h4>
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-5">
          <div class="col" v-for="(list,i) in todayList" :key="list">
            <div class="card shadow-sm" v-if="i < 10">
              <img :src="list.imgList[5].url" class="bd-placeholder-img card-img-top" width="100%" :alt="list.imgList[5].url">
              <div class="card-body">
                <p class="card-title text-black" style="font-size: 15px">{{list.title}}</p>
                <p class="card-text text-black-50" style="font-size: 13px">{{list.artistList[0].name}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">듣기</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">담기</button>
                  </div>
                  <small class="text-muted"></small>
                </div>
              </div>
            </div>
          </div>
          <div class="col" v-for="(list,i) in $store.state.dataMore" :key="list">
            <div class="card shadow-sm" v-if="i >= 10">
              <img :src="list.imgList[5].url" class="bd-placeholder-img card-img-top" width="100%" :alt="list.imgList[5].url">
              <div class="card-body">
                <p class="card-title text-black" style="font-size: 15px">{{list.title}}</p>
                <p class="card-text text-black-50" style="font-size: 13px">{{list.artistList[0].name}}</p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">듣기</button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">담기</button>
                  </div>
                  <small class="text-muted"></small>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: center; margin: 20px auto">
            <button class="btn btn-outline-dark me-2" @click="getData" style="width: 200px">더보기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {mapActions} from 'vuex';
export default {
  name: "Today",
  data(){
    return{
      todayList : "",
    }
  },
  props : {
  },
  methods:{
    ...mapActions(["getData"])
  },
  beforeMount() {
    axios.get('https://www.music-flo.com/api/meta/v1/album/ALL/new?timestamp=1636793296472')
    .then(data => {
      console.log("======================");
      console.log(data.data.data.list);
      this.todayList = data.data.data.list;
    })
  }
}
</script>

<style>

</style>