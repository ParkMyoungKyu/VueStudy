<template>
  <div>
    <img :src = "원룸.image" class="room-img">
    <h4>{{원룸.content}}</h4>
    <p>>{{원룸.price}}원</p>
    <button @click="$emit('openModal', 원룸.id)">모달</button>
  </div>
</template>

<script>
export default {
    name : 'Card',

    props :{
        원룸 : Object,
    }
}
</script>

<style>

</style>