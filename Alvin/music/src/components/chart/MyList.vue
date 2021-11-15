<template>
  <div class="p-3 mb-2 text-black text-center">
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" id="file1" style="display:none;">
      <label for="file1" class="nav-fill">파일올리기</label>
    </div>
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" multiple id="file2" style="display:none;">
      <label for="file2" class="nav-fill">다수 파일올리기</label>
    </div>
    <div class="btn btn-outline-dark ms-4">
      <input @change="upload" type="file" accept="image/*"  id="file3"  style="display:none;">
      <label for="file3" class="nav-fill">이미지 파일올리기</label>
    </div>
    <div v-for="img_list in img" :key="img_list">
      <div class="img-area" v-bind:style="`background-image:url(${img_list})`"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyList",
  data(){
    return{
      img : [],
      style : { b_img:'background-img:none', width: 'width:300px', height: 'height:300px', margin:'margin: 50px auto'},
    }
  },
  methods:{
    upload(e){
      let file = e.target.files;
      //FileReader() // 1) 파일을 글자로 변환해줌
      for(let i=0; i < file.length; i++){
        let url = URL.createObjectURL(file[i]) // 2) 이미지의 가상 URL을 생성해줌
        console.log(url);
        this.img.push(url);
      }
    }
  }
}
</script>

<style>
.img-area{
  width: 300px;
  height: 300px;
  margin: 50px auto;
  background-repeat: no-repeat; /*반복 제어*/
  background-size: contain; /*너비랑 높이가 내용 안쪽에 알맞게 이미지 크기 적용*/
}
</style>