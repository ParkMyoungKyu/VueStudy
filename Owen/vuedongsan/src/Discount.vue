<template>
    <div class="discount">
        <h4>지금 결제하면 {{ salepersent }}% 할인</h4>
    </div>

</template>

<script>
export default {
    name:'Discount',
    data(){
        return{
            salepersent : 30
        }
    },
    mounted(){
        setInterval(() => {
            this.salepersent -= 1;
        }, 1000);
    }
}
</script>

<style>

</style>