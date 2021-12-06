<template>
  <div class="p-3 mb-2 text-black text-center">
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" id="file1" style="display:none;">
      <label for="file1" class="nav-fill">파일올리기<br>Filter</label>
    </div>
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" multiple id="file2" style="display:none;">
      <label for="file2" class="nav-fill">다수 파일올리기</label>
    </div>
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" accept="image/*"  id="file3"  style="display:none;">
      <label for="file3" class="nav-fill">이미지 파일올리기</label>
    </div>
    <div class="btn btn-outline-dark ms-4">
      <input @click="axiosUpload" type="text"  id="file4"  style="display:none;">
      <label for="file4" class="nav-fill">axios 이미지 올리기</label>
    </div>
    <div v-for="img_list in img" :key="img_list">
      <div :class="clickFilter" class="img" v-bind:style="`background-image:url(${img_list})`"></div>
    </div>

    <div v-if="show">
      <FilterBox v-bind:img="img" v-bind:filters="filters">
        <template v-slot:a>{{tranSon}}</template>
        <template v-slot:default="resultCode">{{resultCode.resultCode}}</template>
      </FilterBox>
    </div>

    <div v-for="img_list in axiosImg" :key="img_list">
      <div class="img-area rounded-pill" v-bind:style="`background-image:url(${img_list.imgList[2].url})`"></div>
    </div>
    <MyPage/>
  </div>
</template>

<script>
import FilterBox from '../chart/FilterBox.vue';
import axios from "axios";
import MyPage from "../MyPage.vue";
export default {
  name: "MyList",
  data(){
    return{
      tranSon : "난 부모에서 왔어",
      img : [],
      axiosImg : "",
      show : false,
      style : { b_img:'background-img:none', width: 'width:300px', height: 'height:300px', margin:'margin: 50px auto'},
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"],
      clickFilter : "",
    }
  },
  methods:{
    upload(e){
      let file = e.target.files;
      //FileReader() // 1) 파일을 글자로 변환해줌
      this.img = []; // 초기화
      for(let i=0; i < file.length; i++){
        const url = URL.createObjectURL(file[i]) // 2) 이미지의 가상 URL을 생성해줌
        console.log(url);
        this.img.push(url);
        this.show = true;
      }
    },
    axiosUpload(){
      let url = 'https://www.music-flo.com/api/meta/v1/album/ALL/new?timestamp=1636793296472';
      axios.get(url)
      .then(data => {
        console.log(data.data.data.list);
        this.axiosImg = data.data.data.list;
      })
      .catch(err =>{
          console.log(err);
      })
    },
  },
  components:{
    FilterBox,
    MyPage,
  },
  mounted() {
    this.emitter.on('filterTran',(data)=>{
      console.log(data);
      this.clickFilter = data;
    });
  },
}
</script>

<style>
.img{
  width: 300px;
  height: 300px;
  margin: 20px auto;
  background-repeat: no-repeat; /*반복 제어*/
  background-size: contain; /*너비랑 높이가 내용 안쪽에 알맞게 이미지 크기 적용*/
}
.img-area{
  width: 150px;
  height: 150px;
  margin: 20px;
  float: left;
  background-repeat: no-repeat; /*반복 제어*/
  background-size: contain; /*너비랑 높이가 내용 안쪽에 알맞게 이미지 크기 적용*/
}
</style>