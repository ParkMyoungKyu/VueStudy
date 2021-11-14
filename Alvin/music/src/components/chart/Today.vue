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
                <p class="card-title text-black fs-5">{{list.title}}</p>
                <p class="card-text text-black-50 fs-6">{{list.artistList[0].name}}</p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Today",
  data(){
    return{
      todayList : "",
    }
  },
  props : {
  },
  beforeMount() {
    axios.get('https://www.music-flo.com/api/meta/v1/album/ALL/new?timestamp=1636793296472')
    .then(data => {
      this.todayList = data.data.data.list;
    })
  }
}
</script>

<style>

</style>