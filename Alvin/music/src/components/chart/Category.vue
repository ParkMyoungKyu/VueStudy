<template>
  <div class="p-sm-5 mb-2 bg-opacity-10 text-black shadow" style="text-align: center">
    <div style="display: inline-block" class="text-center collection " v-for="(chart,i) in categoryList" :key="chart">
      <img style="cursor: pointer" v-on:click="chartList(chart.id,i)" class="category rounded-circle btn-outline-primary" :src="chart.imgList[0].url"  >
      <p class="badge rounded-pill bg-light text-dark" style="font-size: 12px; display: block; margin: 5px 35px;">좋아요 : {{ $store.state.like[i] }}</p>
    </div>
  </div>

    <div style=" text-align: center;">
      <h2 class="badge rounded-pill bg-light text-black" style="font-size: 30px; margin: 50px 0px 20px">{{ categoryName }}</h2><br>
      <button type="button" class="btn btn-sm mb-5" :class="likeStyle" v-if="viewCheck" @click="$store.commit('likeCheck',{index,likeText}); clickLike(index);">{{ likeText }}</button>
    </div>

    <div class="upload-image" v-if="viewCheck">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" style="text-align: center; width: 60px">순위</th>
            <th scope="col" style="width: 60px"></th>
            <th scope="col" style="width: 750px">곡/앨범</th>
            <th scope="col" style="width: 250px">아티스트</th>
            <th scope="col" style="text-align: center">듣기</th>
            <th scope="col" style="text-align: center">더보기</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(list,i) in categoryChartList" :key="list" style="height: 92px">
            <th scope="row" class="text-center" style="padding: 30px 0;">
              {{ i+1 }}
            </th>
            <th scope="row" class="text-center" style="padding: 30px 0;">
            <span v-if="list.rank.rankBadge > 0" style="color: red;">
              ▲ {{list.rank.rankBadge}}
            </span>
              <span v-if="list.rank.rankBadge < 0" style="color: blue;">
              ▼ {{list.rank.rankBadge}}
            </span>
            </th>
            <td>
              <div style="position: absolute">
                <img :src="list.album.imgList[0].url" style="border-radius: 5px;">
              </div>
              <div style="padding:12px 28px 0px 90px;">
                <span style="font-weight: bold">{{list.name}}</span><br>
                <span style="font: menu;">{{list.album.title}}</span>
              </div>
            </td>
            <td style="padding: 30px 0;">
              <div class="text-truncate" style="max-width: 300px;">
            <span v-for="(artist,v) in list.artistList" :key="artist">
              <span v-if="v > 0"> & </span>
              {{artist.name}}
            </span>
              </div>
            </td>
            <td style="padding: 30px 0; text-align: center">
              듣기
            </td>
            <td style="text-align: center">
            </td>
          </tr>
        </tbody>
      </table>
    </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Category",
  data(){
    return {
      categoryList : "",
      categoryChartList : "",
      categoryName : "원하는 장르를 선택하세요",
      viewCheck : false,
      index : "",
      likeText : "좋아요",
      likeStyle : "btn-outline-danger",
      likeState : [0,0,0,0,0,0,0,0,0,0] // 좋아요 상태 저장
    }
  },
  created() {
    const url = 'https://www.music-flo.com/api/personal/v1/preferences/genres?timestamp=1636872465944';
    axios.get(url)
    .then(data=>{
      this.categoryList = data.data.data.list;
    })
    .catch(err => {
      console.log(err);
    })
  },
  methods:{
    clickLike(index){
      if(this.likeText == "좋아요") {
        this.likeText = "좋아요 취소";
        this.likeStyle = "btn-danger"
        this.likeState[index] = 1;
      } else {
        this.likeText = "좋아요";
        this.likeStyle = "btn-outline-danger"
        this.likeState[index] = 0;
      }
    },
    chartList(id,index){
      const url = 'https://www.music-flo.com/api/meta/v1/chart/track/'+id+'?timestamp=1636874439905';
      axios.get(url)
      .then(data=>{
        if( this.likeState[index] == 1)  {
          this.likeText = "좋아요 취소";
        }else {
          this.likeText = "좋아요";
        }
        this.viewCheck = true;
        this.index = index;
        this.categoryName = data.data.data.name;
        this.categoryChartList = data.data.data.trackList;
      })
      .catch(err => {
          console.log(err);
      })
    }
  }
}
</script>

<style>
.collection{
}
.category {
  width: 180px;
  height: 180px;
  margin: 20px 0;
  padding: 8px;

  display: inline-block;
  color : white;
  background-size: cover;
}
</style>