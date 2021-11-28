<template>
  <div class="p-sm-5 mb-2 bg-opacity-10 text-black shadow-lg">
  <div>
    <h3>FLO 차트</h3>
  </div>
  <div class="range">
    <div class="sliderValue">
      <span class="sliderValue">100</span>
    </div>
    <div class="field">
      <div class="value left">{{ startChart }}</div>
      <input type="range" min="1" :max="endChart" v-model.number="rangeValue"  steps="1">
      <div class="value right">{{ endChart }}</div>
    </div>
  </div>

  <table class="table table-hover">
    <thead>
    <tr>
      <th scope="col" style="text-align: center">순위</th>
      <th scope="col"></th>
      <th scope="col" style="width: 750px">곡/앨범</th>
      <th scope="col" style="width: 250px">아티스트</th>
      <th scope="col" style="text-align: center">듣기</th>
      <th scope="col" style="text-align: center">더보기</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(list,i) in recentList" :key="list" style="height: 92px">
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
          <a href="#">
            <img :src="recentList[i].album.imgList[0].url" style="border-radius: 5px;">
          </a>
        </div>
        <div style="padding:12px 28px 0px 90px;">
          <span style="font-weight: bold">{{recentList[i].name}}</span><br>
          <span style="font: menu;">{{recentList[i].album.title}}</span>
        </div>
      </td>
      <td style="padding: 30px 0;">
        <div class="text-truncate" style="max-width: 200px;">
        <span v-for="(artist,v) in recentList[i].artistList" :key="artist">
          <span v-if="v > 0"> & </span>
          {{artist.name}}
        </span>
        </div>
      </td>
      <td style="padding: 30px 0; text-align: center">
        듣기
      </td>
      <td style="text-align: center">
<!--        <div>곡정보</div>-->
<!--        <div>아티스트 정보</div>-->
<!--        <div>앨범정보</div>-->
      </td>
    </tr>
    </tbody>
  </table>
    <div class="mt-4 text-md-center">
     <button type="button" class="btn btn-outline-secondary" v-on:click="moreChart">더보기</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Recent",
  data(){
    return{
      recentList : [],
      startChart : 1,
      endChart : 20,
      rangeValue : 20,
    }
  },
  watch:{
    rangeValue(data){
      // 매번 axios를 사용하지 않고 한번에 불러와서 해당 데이터만 뿌려주는 방법이 더 좋을 수도 있을꺼 같다
      const url = 'https://www.music-flo.com/api/display/v1/browser/chart/1/track/list?size='+data+'&timestamp=1636788179275';
      axios.get(url)
          .then( data => {
            this.recentList = data.data.data.trackList;
          })
          .catch(err => console.log(err))
    },
  },
  beforeCreate() {
    console.log("===== beforeCreate =====");
  },
  created() {
    console.log("===== created =====");
    // data는 beforeCreate때가 아닌 created일때 갖고올 수 있다
    const url = 'https://www.music-flo.com/api/display/v1/browser/chart/1/track/list?size='+this.endChart+'&timestamp=1636788179275';
    axios.get(url)
        .then( data => {
          console.log(data.data.data.trackList);
          this.recentList = data.data.data.trackList;
        })
        .catch(err => console.log(err))
  },
  beforeMount() {
    console.log("===== beforeMount =====");
  },
  mounted() {
    console.log("===== mounted =====");
  },
  beforeUpdate() {
    console.log("===== beforeUpdate =====");
  },
  updated() {
    console.log("===== updated =====");
  },

  methods : {
    moreChart(){

      this.endChart = this.endChart+20;
      if(this.endChart > 100){
        alert('100 차트까지만 볼 수 있습니다.');
        this.endChart = this.endChart-20;
      }

      const url = 'https://www.music-flo.com/api/display/v1/browser/chart/1/track/list?size='+this.endChart+'&timestamp=1636788179275';
      axios.get(url)
          .then( data => {
            console.log(data.data.data.trackList);
            this.recentList = data.data.data.trackList;
          })
          .catch(err => console.log(err))
    }
  }
}
</script>

<style>
.range{
  margin: 15px;
  height: 50px;
  width: 100%;
  background: #fff;
  border-radius: 10px;
  padding: 0 65px 0 45px;
  box-shadow: 2px 4px 8px rgba(0,0,0,0.1);
}
.sliderValue{
  position: relative;
  width: 100%;
}
.sliderValue span{
  position: absolute;
  height: 45px;
  width: 45px;
  transform: translateX(-70%) scale(0);
  font-weight: 500;
  top: -40px;
  line-height: 55px;
  z-index: 2;
  color: #fff;
  transform-origin: bottom;
  transition: transform 0.3s ease-in-out;
}
.sliderValue span.show{
  transform: translateX(-70%) scale(1);
}
.sliderValue span:after{
  position: absolute;
  content: '';
  height: 100%;
  width: 100%;
  background: #3f3fff;
  border: 3px solid #fff;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  border-bottom-left-radius: 50%;
  box-shadow: 0px 0px 8px rgba(0,0,0,0.1);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}
.field{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}
.field .value{
  position: absolute;
  font-size: 18px;
  color: #3f3fff;
  font-weight: 600;
}
.field .value.left{
  left: -22px;
}
.field .value.right{
  right: -43px;
}
.range input{
  -webkit-appearance: none;
  width: 100%;
  height: 3px;
  background: #ddd;
  border-radius: 5px;
  outline: none;
  border: none;
  z-index: 2222;
}
.range input::-webkit-slider-thumb{
  -webkit-appearance: none;
  width: 15px;
  height: 15px;
  background: red;
  border-radius: 50%;
  background: #3f3fff;
  border: 1px solid #3f3fff;
  cursor: pointer;
}
.range input::-moz-range-thumb{
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  background: red;
  border-radius: 50%;
  background: #3f3fff;
  border: 1px solid #3f3fff;
  cursor: pointer;
}
.range input::-moz-range-progress{
  background: #3f3fff;
}
</style>